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

// Fonction pour créer dynamiquement les éléments HTML et les ajouter au tableau
const populateTable = async () => {
  const table = document.getElementById("table");

  try {
    const data = await fetchData();

    const verses = Object.values(data["114"]);

    verses.forEach((verse, index) => {
      const verseDiv = document.createElement("div");
      verseDiv.className = "ayah";

      const verseNumberSpan = document.createElement("span");
      verseNumberSpan.className = "verse-number";
      verseNumberSpan.textContent = (index + 1).toString();

      const arabicTextSpan = document.createElement("span");
      arabicTextSpan.className = "arabic";
      arabicTextSpan.textContent = verse;

      verseDiv.appendChild(verseNumberSpan);
      verseDiv.appendChild(arabicTextSpan);

      table.appendChild(verseDiv);
    });
  } catch (error) {
    console.error("Erreur lors du peuplement du tableau:", error);
  }
};
populateTable();

// Fonction pour masquer le texte et afficher les zones de texte
const hideTextAndShowInput = () => {
  const ayahs = document.getElementsByClassName("ayah");
  for (let i = 0; i < ayahs.length; i++) {
    const ayah = ayahs[i];
    const verseText = ayah.querySelector(".arabic");
    const verseInput = document.createElement("input");
    verseInput.type = "search";
    verseInput.classList.add("verse-input");
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

    const inputs = document.querySelectorAll("#table .verse-input");

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

//KEYBOARD
const generateVirtualKeyboard = () => {
  const keyboardContainer = document.createElement("div");
  keyboardContainer.classList.add("keyboard");

  const keyboardRows = [
    ["~", "ّ", "َ", "ً", "ُ", "ٌ", "ِ", "ٍ", "ْ", "ٰ", "ۡ"],
    ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "د"],
    ["ش", "س", "ي", "ب", "ل", "ا", "ت", "ن", "م", "ك", "ط"],
    ["أ", "إ", "ذ", "ر", "لا", "ى", "ة", "و", "ز", "ظ"],
    ["ﻹ", "ﻷ", "ﻵ", "آ", "ئ", "ء", "ؤ", "،", "٬"],
  ];

  keyboardRows.forEach((row) => {
    const keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard-row");

    row.forEach((key) => {
      const button = document.createElement("button");
      button.classList.add("keyboard-key");
      button.textContent = key;

      keyboardRow.appendChild(button);
    });

    keyboardContainer.appendChild(keyboardRow);
  });

  // Ajout de la barre d'espace et du bouton de suppression des caractères
  const spaceDeleteRow = document.createElement("div");
  spaceDeleteRow.classList.add("keyboard-row");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("keyboard-key", "delete");
  deleteButton.innerHTML =
    "<span class='delete-icon'><i class='fas fa-chevron-right'></i></span>";
  deleteButton.addEventListener("click", () => {
    const selectedInput = document.querySelector(".verse-input.selected");
    if (selectedInput) {
      const currentValue = selectedInput.value;
      const currentCursorPosition = selectedInput.selectionStart;
      const textBeforeCursor = currentValue.substring(
        0,
        currentCursorPosition - 1
      );
      const textAfterCursor = currentValue.substring(currentCursorPosition);
      selectedInput.value = textBeforeCursor + textAfterCursor;
      selectedInput.selectionStart = currentCursorPosition - 1;
      selectedInput.selectionEnd = currentCursorPosition - 1;
    }
  });

  spaceDeleteRow.appendChild(deleteButton);

  const spaceButton = document.createElement("button");
  spaceButton.classList.add("keyboard-key", "space");
  spaceButton.textContent = " ";
  spaceDeleteRow.appendChild(spaceButton);

  const leftButton = document.createElement("button");
  leftButton.classList.add("keyboard-key", "direction");
  leftButton.innerHTML = "<i class='fas fa-arrow-left'></i>";
  leftButton.addEventListener("click", () => {
    const selectedInput = document.querySelector(".verse-input.selected");
    if (selectedInput) {
      const currentCursorPosition = selectedInput.selectionStart;
      if (currentCursorPosition < selectedInput.value.length) {
        selectedInput.selectionStart = currentCursorPosition + 1;
        selectedInput.selectionEnd = currentCursorPosition + 1;
      }
    }
  });
  spaceDeleteRow.appendChild(leftButton);

  const rightButton = document.createElement("button");
  rightButton.classList.add("keyboard-key", "direction");
  rightButton.innerHTML = "<i class='fas fa-arrow-right'></i>";
  rightButton.addEventListener("click", () => {
    const selectedInput = document.querySelector(".verse-input.selected");
    if (selectedInput) {
      const currentCursorPosition = selectedInput.selectionStart;
      if (currentCursorPosition > 0) {
        selectedInput.selectionStart = currentCursorPosition - 1;
        selectedInput.selectionEnd = currentCursorPosition - 1;
      }
    }
  });
  spaceDeleteRow.appendChild(rightButton);

  keyboardContainer.appendChild(spaceDeleteRow);

  document.body.appendChild(keyboardContainer);
};

const attachKeyboardEvents = (input) => {
  const keyboardKeys = document.querySelectorAll(".keyboard-key");
  const keyboard = document.querySelector(".keyboard");

  keyboardKeys.forEach((key) => {
    key.addEventListener("click", () => {
      const character = key.textContent;

      const selectedInput = document.querySelector(".verse-input.selected");

      if (input === selectedInput) {
        selectedInput.value += character;
      }
    });

    key.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });
  });

  input.addEventListener("click", () => {
    const inputFields = document.querySelectorAll(".verse-input");
    inputFields.forEach((i) => i.classList.remove("selected"));
    input.classList.add("selected");
  });

  input.addEventListener("focus", () => {
    keyboard.classList.add("show");
    const inputLength = input.value.length;
    input.setSelectionRange(inputLength, inputLength); // Positionne le curseur à la fin du texte
  });

  input.addEventListener("blur", () => {
    keyboard.classList.remove("show");
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault(); // Empêche la navigation par défaut des flèches gauche et droite
    }
  });
};

const observer = new MutationObserver((mutationsList) => {
  mutationsList.forEach((mutation) => {
    if (mutation.addedNodes.length > 0) {
      mutation.addedNodes.forEach((node) => {
        if (
          node.tagName === "INPUT" &&
          node.classList.contains("verse-input")
        ) {
          attachKeyboardEvents(node);
        }
      });
    }
  });
});

const config = {
  childList: true,
  subtree: true,
};

observer.observe(document, config);

generateVirtualKeyboard();
