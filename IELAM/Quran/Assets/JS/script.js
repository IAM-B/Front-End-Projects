//TEMPLATE
// Fonction pour récupérer les données à partir d'une requête HTTP
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/IAM-B/Frontend-Projects/main/IELAM/Quran/Assets/JSON/quran-uthmani.json"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    return {};
  }
};

// Fonction pour récupérer les données à partir d'une requête HTTP
const fetchPartsData = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/IAM-B/Frontend-Projects/main/IELAM/Quran/Assets/JSON/page-indices-lookup.json"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    return {};
  }
};

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

    const start = extractedData[1].start;
    const end = extractedData[1].end;
    
    populateTable(start, end);
  } catch (error) {
    console.log(error);
  }
};

const populateTable = async (start, end) => {
  const table = document.getElementById("table");

  try {
    const data = await fetchData();

    const startSurahData = data[start.surah];
    const endSurahData = data[end.surah];

    const verses = Object.values(startSurahData).slice(
      start.ayah - 1,
      end.ayah
    );
    const verseContainer = document.createElement("div");
    verseContainer.id = "verse-container";

    verses.forEach((verse, index) => {
      const verseDiv = document.createElement("div");
      verseDiv.className = "ayah";

      const verseNumberSpan = document.createElement("span");
      verseNumberSpan.className = "verse-number";
      verseNumberSpan.textContent = (start.ayah + index).toString();

      const arabicTextSpan = document.createElement("span");
      arabicTextSpan.className = "arabic";
      arabicTextSpan.textContent = verse;

      verseDiv.appendChild(verseNumberSpan);
      verseDiv.appendChild(arabicTextSpan);
      verseContainer.appendChild(verseDiv);
    });

    table.appendChild(verseContainer);
  } catch (error) {
    console.error("Erreur lors du peuplement du tableau:", error);
  }
};

displayPart();


// Fonction pour masquer le texte et afficher les zones de texte
const hideTextAndShowInput = () => {
  const ayahs = document.getElementsByClassName("ayah");
  for (let i = 0; i < ayahs.length; i++) {
    const ayah = ayahs[i];
    const verseText = ayah.querySelector(".arabic");
    const verseInput = document.createElement("input");
    verseInput.type = "search";
    verseInput.classList.add("input-fill");
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
  
// Fonction pour corriger les réponses des utilisateurs
const checkAnswers = async () => {
  try {
    const data = await fetchData();

    const inputs = document.querySelectorAll("#table .input-fill");

    inputs.forEach((input, index) => {
      const userAnswer = input.value.trim();
      const verse = data[1][index + 1];

      const verseSpan = document.createElement("span");
      verseSpan.classList.add("verse-text");

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
