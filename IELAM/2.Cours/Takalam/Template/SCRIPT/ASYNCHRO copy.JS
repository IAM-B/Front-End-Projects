const section = document.querySelector("section");
const exerciceIds = ["exercice-1", "exercice-2", "exercice-3", "exercice-4",];

const scriptUrls = {
  "exercice-1":
    "https://raw.githubusercontent.com/IAM-B/Frontend-Projects/main/IELAM/2.Cours/Takalam/Mustawa1/Vocabulary%20files/1-Introduction/Vocabulary1.json",
  "exercice-2":
    "https://raw.githubusercontent.com/IAM-B/Frontend-Projects/main/IELAM/2.Cours/Takalam/Mustawa1/Vocabulary%20files/1-Introduction/Vocabulary2.json",
  "exercice-3":
    "https://raw.githubusercontent.com/IAM-B/Frontend-Projects/main/IELAM/2.Cours/Takalam/Mustawa1/Vocabulary%20files/1-Introduction/Vocabulary3.json",
  "exercice-4":
    "https://raw.githubusercontent.com/IAM-B/Frontend-Projects/main/IELAM/2.Cours/Takalam/Mustawa1/Vocabulary%20files/1-Introduction/Vocabulary4.json",
};

function loadInitialExercice() {
  const lastExerciceIndex = parseInt(
    localStorage.getItem("lastExerciceIndex")
  );
  if (
    !isNaN(lastExerciceIndex) &&
    lastExerciceIndex >= 0 &&
    lastExerciceIndex < exerciceIds.length
  ) {
    loadScriptAndData(lastExerciceIndex);
  } else {
    loadScriptAndData(0);
  }
}

let ExerciceIndex = [];
function loadScriptAndData(exerciceIndex) {
  const existingScript = document.querySelector("#exercise-script");
  if (existingScript) {
    existingScript.remove();
  }

  fetch(scriptUrls[exerciceIds[exerciceIndex]])
    .then((response) => response.json())
    .then((data) => {
      const vocabularies = data.vocabulary;
      const ticketListe = data.ticket;

      generateVocabularies(vocabularies, ticketListe);
      processVocabularies(vocabularies, ticketListe);

      const script = document.createElement("script");
      script.id = "exercise-script";
      script.src = scriptUrls[exerciceIds[exerciceIndex]];

      const footerElement = document.querySelector("footer");
      const parentElement = footerElement.parentNode;
      parentElement.insertBefore(script, footerElement.nextSibling);

      section.id = exerciceIds[exerciceIndex];

      exerciseButtons.forEach((button) => {
        button.classList.remove("active");
      });
      exerciseButtons[exerciceIndex].classList.add("active");

      localStorage.setItem("lastExerciceIndex", exerciceIndex.toString());
    })
    .catch((error) => {
      console.error(
        "Une erreur s'est produite lors du chargement du fichier JSON:",
        error
      );
    });
}

const exerciseButtonsContainer = document.querySelector(".btn-content");
const exerciseButtons = [];
const currentPage = 0; // Vous devez définir la page actuelle (0 pour commencer)

const buttonPageContent = document.createElement("div");
buttonPageContent.classList.add("button-page-container");
exerciseButtonsContainer.appendChild(buttonPageContent);

exerciceIds.forEach((exerciceId, index) => {
  const button = document.createElement("button");
  button.textContent = `${index + 1}`;
  button.classList.add("exercise-button");
  button.addEventListener("click", () => {
    currentPage = index;
    const vocabularyForm = document.querySelector("#vocab");
    const exerciceForm = document.querySelector("#exo");
    const sectionVocabulary = document.getElementById("main-section");
    sectionVocabulary.classList.remove("fade-in-vocab");
    sectionVocabulary.classList.add("fade-out-vocab");
    setTimeout(() => {
      vocabularyForm.innerHTML = "";
      exerciceForm.innerHTML = "";
      loadScriptAndData(index);
      showVocabularySection();
      sectionVocabulary.classList.remove("fade-out-vocab");
      sectionVocabulary.classList.add("fade-in-vocab");
    }, 725);
  });
  exerciseButtons.push(button);
  buttonPageContent.appendChild(button);
});

// Ajouter le bouton "Suivant" avec un chevron
const nextButton = document.createElement("button");
nextButton.classList.add("exercise-button");
nextButton.innerHTML = "&rarr;"; // Utilisez une icône de chevron vers la droite
nextButton.addEventListener("click", () => {
  if (currentPage < exerciceIds.length - 1) {
    currentPage++;
    // Mettez à jour le contenu de la page
    updatePageContent(currentPage);
  }
});
exerciseButtons.push(nextButton);
buttonPageContent.appendChild(nextButton);

// Ajouter le bouton "Précédent" avec un chevron
const prevButton = document.createElement("button");
prevButton.classList.add("exercise-button");
prevButton.innerHTML = "&larr;"; // Utilisez une icône de chevron vers la gauche
prevButton.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    // Mettez à jour le contenu de la page
    updatePageContent(currentPage);
  }
});
exerciseButtons.push(prevButton);
buttonPageContent.appendChild(prevButton);

// Fonction pour mettre à jour le contenu de la page en fonction de currentPage
function updatePageContent(pageIndex) {
  const vocabularyForm = document.querySelector("#vocab");
  const exerciceForm = document.querySelector("#exo");
  const sectionVocabulary = document.getElementById("main-section");
  sectionVocabulary.classList.remove("fade-in-vocab");
  sectionVocabulary.classList.add("fade-out-vocab");
  setTimeout(() => {
    vocabularyForm.innerHTML = "";
    exerciceForm.innerHTML = "";
    loadScriptAndData(pageIndex);
    showVocabularySection();
    sectionVocabulary.classList.remove("fade-out-vocab");
    sectionVocabulary.classList.add("fade-in-vocab");
  }, 725);
}


loadInitialExercice();
