const section = document.querySelector("section");
const exerciceIds = ["exercice-1", "exercice-2", "exercice-3"];

const scriptUrls = {
  "exercice-1":
    "https://raw.githubusercontent.com/IAM-B/Frontend-Projects/main/IELAM/Tome1/tome1-vocab1.json",
  "exercice-2":
    "https://raw.githubusercontent.com/IAM-B/Frontend-Projects/main/IELAM/Tome1/tome1-vocab2.json",
  "exercice-3":
    "https://raw.githubusercontent.com/IAM-B/Frontend-Projects/main/IELAM/Tome1/tome1-vocab3.json",
};

let currentExerciceIndex = parseInt(
  localStorage.getItem("currentExerciceIndex")
);

if (isNaN(currentExerciceIndex) || currentExerciceIndex >= exerciceIds.length) {
  currentExerciceIndex = 0;
}

// Charger le fichier JSON
fetch(scriptUrls[exerciceIds[currentExerciceIndex]])
  .then((response) => response.json())
  .then((data) => {
    // Stocker le tableau de vocabulaires dans la variable "vocabularies"
    const vocabularies = data;

    console.log(vocabularies);
    generateVocabularies(vocabularies);
    processVocabularies(vocabularies);

    const script = document.createElement("script");
    script.src = scriptUrls[exerciceIds[currentExerciceIndex]];

    const footerElement = document.querySelector("footer");
    const parentElement = footerElement.parentNode;
    parentElement.insertBefore(script, footerElement.nextSibling);

    section.id = exerciceIds[currentExerciceIndex];
    currentExerciceIndex = (currentExerciceIndex + 1) % exerciceIds.length;
    localStorage.setItem(
      "currentExerciceIndex",
      currentExerciceIndex.toString()
    );
  })
  .catch((error) => {
    // Gérer les erreurs lors du chargement du fichier JSON
    console.error(
      "Une erreur s'est produite lors du chargement du fichier JSON:",
      error
    );
  });
