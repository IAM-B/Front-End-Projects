const fetchData = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/IAM-B/Frontend-Projects/main/IELAM/1.Quran/Assets/Words%20order/1.json"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    return {};
  }
};

function convertToArabicNumber(number) {
  const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  const digits = String(number).split("");
  const arabicDigits = digits.map((digit) => arabicNumbers[digit]);
  return arabicDigits.join("");
}

const populateTable = async (start, end) => {
  const mushafLayoutDiv = document.getElementById("mushaf-layout");

  try {
    const data = await fetchData();
    const hizb = data.hizb;
    const juz = data.juz;
    const pageNumber = data.pageNumber;
    const surahs = data.surahs;

    const bgImg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    bgImg.innerHTML = `...`;

    bgImg.id = "bgQuran";
    mushafLayoutDiv.appendChild(bgImg);

    const juzHizbDiv = document.createElement("div");
    juzHizbDiv.classList.add("row");
    const juzHizbSpan = document.createElement("span");
    juzHizbSpan.classList.add("juz-hizb");
    juzHizbSpan.textContent = `جزء ${juz}, حزب ${hizb}`;

    const pageNumberSpan = document.createElement("span");
    pageNumberSpan.classList.add("page-number");
    pageNumberSpan.textContent = `Page: ${pageNumber}`;
    juzHizbDiv.appendChild(pageNumberSpan);

    const mushafWrapperDiv = document.createElement("div");
    mushafWrapperDiv.classList.add("mushaf-wrapper");
    mushafWrapperDiv.id = "page-" + `${pageNumber}`;

    const surahDiv = document.createElement("div");
    surahDiv.classList.add("line1");
    const surahSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    surahSvg.innerHTML = `...`;

    const lineContent = {};

    surahs.forEach((surah) => {
      const surahNumSpan = document.createElement("span");
      surahNumSpan.classList.add("surah");
      surahNumSpan.textContent = `سورة ${surah.surahNum}`;
      juzHizbDiv.appendChild(surahNumSpan);

      let lineDiv;
      let currentLineNumber = null;
      let mushafButton;
      let tempLineNumber;
      mushafWrapperDiv.appendChild(surahDiv);
      surahDiv.appendChild(surahSvg);

      surah.ayahs.forEach((ayah) => {
        const { ayahNum, words } = ayah;

        words.forEach((word) => {
          const { text, lineNumber } = word;

          if (lineNumber !== currentLineNumber) {
            lineDiv = document.createElement("div");
            lineDiv.classList.add("line" + `${lineNumber}`, "ayah-kalam");
            mushafWrapperDiv.appendChild(lineDiv);
            currentLineNumber = lineNumber;
          }

          if (text !== null && text !== undefined) {
            const textSpan = document.createElement("span");
            textSpan.classList.add("kalam");
            textSpan.textContent = " " + `${text}`;
            lineDiv.appendChild(textSpan);

            if (!lineContent[lineNumber]) {
              lineContent[lineNumber] = [];
            }
            lineContent[lineNumber].push({ text });
          }
          tempLineNumber = lineNumber;
        });

        if (ayahNum !== null) {
          const ayahNumSpan = document.createElement("span");
          ayahNumSpan.classList.add("ayahNum");
          ayahNumSpan.textContent = " " + `${ayahNum}`;
          const arabicNum = convertToArabicNumber(ayahNum);
          ayahNumSpan.innerHTML = `${arabicNum}`;
          lineDiv.appendChild(ayahNumSpan);
          lineContent[tempLineNumber].push({ ayahNum });
        }
      });

      mushafButton = document.createElement("button");
      mushafButton.id = "editButton";
      mushafButton.textContent = "Mushaf Button";
      mushafWrapperDiv.appendChild(lineDiv);
      mushafWrapperDiv.appendChild(mushafButton);
    });

    mushafLayoutDiv.appendChild(mushafWrapperDiv);
    mushafLayoutDiv.appendChild(juzHizbDiv);
    juzHizbDiv.appendChild(juzHizbSpan);

    let separatedLine = [];
    let kalamElements = [];
    const kalamText = document.getElementsByClassName("ayah-kalam");
    const verseText = document.getElementsByClassName("kalam");

    const hideTextAndShowInput = () => {
      for (let i = 0; i < kalamText.length; i++) {
        kalamElements.push(kalamText[i].textContent.trim());
      }

      for (const lineNumber in lineContent) {
        const line = lineContent[lineNumber].map(({ text, ayahNum }) => {
          if (ayahNum) {
            return { type: "ayah-num", value: ayahNum };
          }
          return { type: "kalam", value: text };
        });

        separatedLine = line;

        const inputContainer = document.createElement("div");
        inputContainer.classList.add("input-container");

        let currentInput = null;

        for (let i = 0; i < separatedLine.length; i++) {
          const { type, value } = separatedLine[i];

          if (type === "ayah-num") {
            if (currentInput) {
              inputContainer.appendChild(currentInput);
              currentInput = null;
            }
            const ayahNumElement = document.createElement("span");
            ayahNumElement.classList.add("ayah-num");
            const arabicNum = convertToArabicNumber(value); // Convert the number to Arabic
            ayahNumElement.textContent = arabicNum;
            inputContainer.appendChild(ayahNumElement);
          } else if (type === "kalam") {
            if (currentInput) {
              currentInput.size += value.length - 2;
            } else {
              currentInput = document.createElement("input");
              currentInput.type = "search";
              currentInput.classList.add("input-ayah");
              currentInput.autocomplete = "off";
              currentInput.setAttribute("inputmode", "none");
              currentInput.size = value.length;
            }
          }
        }

        if (currentInput) {
          inputContainer.appendChild(currentInput);
        }
        verseText[lineNumber].parentNode.replaceChild(
          inputContainer,
          verseText[lineNumber]
        );
      }
      const remainingKalamElements = document.getElementsByClassName("kalam");
      while (remainingKalamElements.length > 0) {
        const kalamElement = remainingKalamElements[0];
        kalamElement.remove();
      }
      const remainingAyahNumElements =
        document.getElementsByClassName("ayahNum");
      while (remainingAyahNumElements.length > 0) {
        const ayahNumElement = remainingAyahNumElements[0];
        ayahNumElement.remove();
      }
    };

    document
      .getElementById("editButton")
      .addEventListener("click", hideTextAndShowInput);
  } catch (error) {
    console.error("Erreur lors du peuplement du tableau :", error);
  }
};

populateTable();

const checkAnswers = async () => {
  try {
    const data = await fetchData();

    const inputs = document.querySelectorAll("#mushaf-layout .input-ayah");

    inputs.forEach((input) => {
      const userAnswer = input.value.trim();
      const verse = data.words;

      const verseSpan = document.createElement("span");
      verseSpan.classList.add("ayah-kalam");

      const verseWords = verse.split(" ");

      verseWords.forEach((word) => {
        const wordSpan = document.createElement("span");

        if (userAnswer.includes(word)) {
          wordSpan.textContent = word + " ";
        } else {
          const wordWrapperSpan = document.createElement("span");
          wordWrapperSpan.classList.add("word-wrapper");

          const errorWordSpan = document.createElement("span");
          errorWordSpan.classList.add("error");
          errorWordSpan.textContent = word;

          wordWrapperSpan.appendChild(errorWordSpan);
          wordWrapperSpan.innerHTML += " ";

          wordSpan.appendChild(wordWrapperSpan);
        }

        verseSpan.appendChild(wordSpan);
      });

      let errorElement = document.createElement("span");
      errorElement.classList.add("error-message");

      if (userAnswer === verse) {
        errorElement.textContent = "Correct";
        errorElement.classList.add("correct");
      } else {
        const userWords = userAnswer.split(" ");
        const errorWordSpan = document.createElement("span");

        userWords.forEach((userWord, wordIndex) => {
          const wordSpan = document.createElement("span");

          const verseWords = verse.split(" ");
          const matchingWord = verseWords.find(
            (verseWord) => verseWord === userWord
          );

          if (matchingWord) {
            wordSpan.textContent = userWord + " ";
          } else {
            const errorSpan = document.createElement("span");
            errorSpan.classList.add("error");
            errorSpan.textContent = userWord + " ";
            wordSpan.appendChild(errorSpan);
          }

          errorWordSpan.appendChild(wordSpan);

          if (wordIndex !== userWords.length - 1) {
            errorWordSpan.appendChild(document.createTextNode(" "));
          }
        });

        errorElement.textContent = "Erreur :";
        errorElement.appendChild(errorWordSpan);
        errorElement.classList.add("incorrect");
      }

      const inputContainer = document.createElement("div");
      inputContainer.classList.add("input-container");

      const ayahNumElement = document.createElement("span");
      ayahNumElement.classList.add("ayah-num");
      ayahNumElement.textContent = verse.ayahNum;

      inputContainer.appendChild(ayahNumElement);
      inputContainer.appendChild(verseSpan);
      inputContainer.appendChild(errorElement);

      input.parentNode.replaceChild(inputContainer, input);
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
};

document.getElementById("checkButton").addEventListener("click", checkAnswers);
