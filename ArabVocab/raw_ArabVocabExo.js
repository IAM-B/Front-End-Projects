// Définir les IDs des exercices dans un tableau
const exerciceIds = [
  "exercice-1",
  "exercice-2",
  "exercice-3",
  "exercice-4",
  "exercice-5",
  "exercice-6",
  "exercice-7",
  "exercice-8",
];

// Définir les URL des scripts correspondant à chaque exercice
const scriptUrls = {
  "exercice-1":
    "https://raw.githubusercontent.com/IAM-B/public_file/main/ArabVocab%20lib/vocab1/app1.js",
  "exercice-2":
    "https://raw.githubusercontent.com/IAM-B/public_file/main/ArabVocab%20lib/vocab2/app2.js",
  "exercice-3":
    "https://raw.githubusercontent.com/IAM-B/public_file/main/ArabVocab%20lib/vocab3/app3.js",
  "exercice-4":
    "https://raw.githubusercontent.com/IAM-B/public_file/main/ArabVocab%20lib/vocab4/app4.js",
  "exercice-5":
    "https://raw.githubusercontent.com/IAM-B/public_file/main/ArabVocab%20lib/vocab5/app5.js",
  "exercice-6":
    "https://raw.githubusercontent.com/IAM-B/public_file/main/ArabVocab%20lib/vocab6/app6.js",
  "exercice-7":
    "https://raw.githubusercontent.com/IAM-B/public_file/main/ArabVocab%20lib/vocab7/app7.js",
  "exercice-8":
    "https://raw.githubusercontent.com/IAM-B/public_file/main/ArabVocab%20lib/vocab8/app8.js",
};

// Récupérer l'index de l'exercice actuel stocké dans le localStorage
let currentExerciceIndex = parseInt(
  localStorage.getItem("currentExerciceIndex")
);

// Si aucun exercice n'a encore été réalisé, on commence par le premier
if (isNaN(currentExerciceIndex)) {
  currentExerciceIndex = 0;
}

// Charger l'exercice suivant et supprimer tous les exercices précédents
for (let i = 0; i < exerciceIds.length; i++) {
  if (i < currentExerciceIndex) {
    const exercice = document.getElementById(exerciceIds[i]);
    if (exercice) {
      exercice.remove();
    }
  } else if (i === currentExerciceIndex) {
    const currentExercice = document.getElementById(exerciceIds[i]);
    if (currentExercice) {
      const scriptUrl = scriptUrls[currentExercice.id];
      if (scriptUrl) {
        const script = document.createElement("script");
        script.src = scriptUrl;
        document.body.appendChild(script);
      }
    }
  } else {
    const exercice = document.getElementById(exerciceIds[i]);
    if (exercice) {
      exercice.remove();
    }
  }
}

// Mettre à jour l'index de l'exercice actuel pour le prochain chargement de la page
currentExerciceIndex++;
if (currentExerciceIndex >= exerciceIds.length) {
  currentExerciceIndex = 0;
}
localStorage.setItem("currentExerciceIndex", currentExerciceIndex.toString());