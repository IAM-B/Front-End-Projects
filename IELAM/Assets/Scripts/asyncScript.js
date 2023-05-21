const section = document.querySelector("section");
const exerciceIds = [
  "exercice-1",
  "exercice-2",
  "exercice-3",
];

const scriptUrls = {
  "exercice-1": "Tome1/tome1-vocab1.js",
  "exercice-2": "Tome1/tome1-vocab2.js",
  "exercice-3": "Tome1/tome1-vocab3.js",
};

let currentExerciceIndex = parseInt(localStorage.getItem("currentExerciceIndex"));

if (isNaN(currentExerciceIndex) || currentExerciceIndex >= exerciceIds.length) {
  currentExerciceIndex = 0;
}

const script = document.createElement("script");
script.src = scriptUrls[exerciceIds[currentExerciceIndex]];
script.addEventListener("load", function () {
  generateVocabularies();
  processVocabularies(vocabularies);
});

const footerElement = document.querySelector("footer");
const parentElement = footerElement.parentNode;
parentElement.insertBefore(script, footerElement.nextSibling);

section.id = exerciceIds[currentExerciceIndex];
currentExerciceIndex = (currentExerciceIndex + 1) % exerciceIds.length;
localStorage.setItem("currentExerciceIndex", currentExerciceIndex.toString());
