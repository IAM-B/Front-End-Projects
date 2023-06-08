// Function to fetch the data from the json file
const fetchData = async () => {
  try {
    const response = await fetch(
'https://raw.githubusercontent.com/IAM-B/Frontend-Projects/main/IELAM/1.Quran/Assets/JSON/quran-uthmani.json'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    return {};
  }
};
const fetchPartsData = async () => {
  try {
    const response = await fetch(
'https://raw.githubusercontent.com/IAM-B/Frontend-Projects/main/IELAM/1.Quran/Assets/JSON/page-indices-lookup.json'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    return {};
  }
};

// Function to delay the loading of fetchPartsData
const displayPart = async () => {
  try {
    const partsData = await fetchPartsData();

    const extractedData = partsData.map((part) => {
      return {
        start: {
          surah: part.start.surah,
          ayah: part.start.ayah,
        },
        end: {
          surah: part.end.surah,
          ayah: part.end.ayah,
        },
      };
    });

    const start = extractedData[0].start;
    const end = extractedData[0].end;
    
    populateTable(start, end);
  } catch (error) {
    console.log(error);
  }
};

// Function to increment the mushaf-layout section
const populateTable = async (start, end) => {
  const table = document.getElementById("mushaf-layout");

  try {
    const data = await fetchData();

    const startSurahData = data[start.surah];
    const endSurahData = data[end.surah];

    const verses = Object.values(startSurahData).slice(
      start.ayah - 1,
      end.ayah
    );
    const verseContainer = document.createElement("div");
    verseContainer.id = "mushaf-wrapper";

    const pageContainer = document.createElement("div");
    pageContainer.className = "mushaf-page";

    verses.forEach((verse, index) => {
      const verseDiv = document.createElement("div");
      verseDiv.className = "ayah";

      const verseNumberSpan = document.createElement("span");
      verseNumberSpan.className = "ayah-number";
      verseNumberSpan.textContent = (start.ayah + index).toString();

      const arabicTextSpan = document.createElement("span");
      arabicTextSpan.className = "kalam";
      arabicTextSpan.textContent = verse;

      verseDiv.appendChild(verseNumberSpan);
      verseDiv.appendChild(arabicTextSpan);
      pageContainer.appendChild(verseDiv);
    });

    verseContainer.appendChild(pageContainer);
    table.appendChild(verseContainer);
  } catch (error) {
    console.error("Erreur lors du peuplement du tableau:", error);
  }
};
displayPart();


// Function to hide text and display text areas
const hideTextAndShowInput = () => {
  const ayahs = document.getElementsByClassName("ayah");
  for (let i = 0; i < ayahs.length; i++) {
    const ayah = ayahs[i];
    const verseText = ayah.querySelector(".kalam");
    const verseInput = document.createElement("input");
    verseInput.type = "search";
    verseInput.classList.add("input-ayah");
    verseInput.placeholder = "Réécrivez le verset...";
    verseInput.autocomplete = "off";
    verseInput.setAttribute("inputmode", "none");
    verseInput.size = verseText.textContent.length;
    ayah.replaceChild(verseInput, verseText);
  }
};
document
  .getElementById("editButton")
  .addEventListener("click", hideTextAndShowInput);
  
// Function to correct user answers
const checkAnswers = async () => {
  try {
    const data = await fetchData();

    const inputs = document.querySelectorAll("#mushaf-layout .input-ayah");

    inputs.forEach((input, index) => {
      const userAnswer = input.value.trim();
      const verse = data[1][index + 1];

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

      input.parentNode.appendChild(errorElement);
      input.parentNode.replaceChild(verseSpan, input);
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
  }
};

document.getElementById("checkButton").addEventListener("click", checkAnswers);
