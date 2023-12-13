const section = document.querySelector("section");
const exerciceIds = ["exercice-1", "exercice-2", "exercice-3", "exercice-4",];

const scriptUrls = {
  "exercice-1":
    "https://raw.githubusercontent.com/IAM-B/Frontend-Projects/main/IELAM/Takalam/Vocabulary-files/1-Introduction/Vocabulary1.json",
  "exercice-2":
    "https://raw.githubusercontent.com/IAM-B/Frontend-Projects/main/IELAM/Takalam/Vocabulary-files/1-Introduction/Vocabulary2.json",
  "exercice-3":
    "https://raw.githubusercontent.com/IAM-B/Frontend-Projects/main/IELAM/Takalam/Vocabulary-files/1-Introduction/Vocabulary3.json",
  "exercice-4":
    "https://raw.githubusercontent.com/IAM-B/Frontend-Projects/main/IELAM/Takalam/Vocabulary-files/1-Introduction/Vocabulary4.json",
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

      if (typeof generateVocabularies === "function") {
        generateVocabularies(vocabularies, ticketListe);
        processVocabularies(vocabularies, ticketListe);
      } else {
        window.location.reload();
        return;
      }

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

const buttonPageContent = document.createElement("div");
buttonPageContent.classList.add("button-page-container");
exerciseButtonsContainer.appendChild(buttonPageContent);

exerciceIds.forEach((exerciceId, index) => {
  const button = document.createElement("button");
  button.textContent = `${index + 1}`;
  button.id = "btn" + `${index + 1}`;
  button.classList.add("exercise-button");
  button.addEventListener("click", () => {
    counter = -1;
    const vocabularyForm = document.querySelector("#vocab");
    const exerciceForm = document.querySelector("#exo");
    const sectionVocabulary = document.getElementById("main-section-vocabulary");
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

loadInitialExercice();
