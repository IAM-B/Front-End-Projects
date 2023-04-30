// Fonction qui enleve les caractères spéciaux
const removePunctuation = (str) => {
  if (!str) {
    return false;
  }
  // Caractères spéciaux entre crochets
  return str.replace(/[.,-\/#!?$%\^&\*;:{}=\-_`~()\b ]/g, "");
};

// Fonction qui vérifie les réponses
const vocab = () => {
  const results = [];
  for (let i = 0; i <= 17; i++) {
    results.push(
      removePunctuation(document.getElementById(i).value.toUpperCase())
    );
  }

  const ChampTxt = document.getElementById("Aff");
  let score = 0;

  // Réponses correctes
  const goodRep = [
    "كلام",
    "قول",
    "أقوال",
    "حرف",
    "حروف",
    "فعل",
    "أفعال",
    "لغة",
    "لغات",
    "كلمة",
    "كلمات",
    "اسم",
    "أسماء",
    "جملة",
    "جمل",
    "العربية",
    "مذكر",
    "مؤنث",
  ];
  const goodRep2 = [
    "كَلَام",
    "قَوْل",
    "أَقْوَال",
    "حَرْف",
    "حُرُوف",
    "فِعْل",
    "أَفْعَال",
    "لُغَة",
    "لُغَات",
    "كَلِمَة",
    "كَلِمَات",
    "اِسْم",
    "أَسْمَاء",
    "جُمْلَة",
    "جُمَل",
    "الْعَرَبِيَّة",
    "مُذَكَّر",
    "مُؤَنَّث",
  ];

  const n = goodRep.length;

  // Vérifier si tous les champs sont remplis
  if (results.every((result) => result)) {
    // Parcourir les réponses
    for (let i = 0; i < n; i++) {
      const hasVowels = /[ًٌٍَُِّْ]/.test(results[i]);
      if (
        goodRep[i] !== results[i] &&
        (!hasVowels || goodRep2[i] !== results[i])
      ) {
        const isCorrect = false;
        for (const correctAnswer of [goodRep[i], goodRep2[i]]) {
          if (correctAnswer === results[i]) {
            isCorrect = true;
            break;
          }
        }
        if (!isCorrect) {
          document.getElementById(i).style.color = "#ff0000";
          document.getElementById(i).classList.remove("correct-answer");
        }
      } else {
        score++;
        document.getElementById(i).style.color = "#00ff00";
        document.getElementById(i).classList.add("correct-answer");
      }
    }

    // Vérifier le score
    if (score == n) {
      ChampTxt.innerHTML =
        '<p style="color:#00ff00;text-align: center;font-size: 20px;font-weight: bolder;margin: 50px auto;">الله بارك<br/>Toutes les r&eacute;ponses sont correctes</p>';
    } else {
      ChampTxt.innerHTML =
        '<p style="color:#683f19;text-align: center;font-size: 20px;font-weight: bolder;margin: 50px 0 10px;">الله يسهل عليك<br/>Corrigez les r&eacute;ponses fausses en rouge et r&eacute;essayez</p><br><p style="color:#ff0000;text-align: center;font-size: 20px;font-weight: bolder;margin: 10px auto;">ATTENTION<br>L\'auto-complétion compte pour une erreur</p>';
    }
  } else {
    ChampTxt.innerHTML =
      '<p style="color:#ff0000;text-align: center;font-size: 20px;font-weight: bolder;margin: 50px auto;">بارك الله فيك<br/>Rempli tous les champs</p>';
  }
};

const showCorrections = () => {
  const results = [];
  for (let i = 0; i <= 17; i++) {
    results.push(
      removePunctuation(document.getElementById(i).value.toUpperCase())
    );
  }

  const ChampTxt = document.getElementById("Aff");
  let score = 0;

  // Réponses correctes
  const goodRep = [
    "كلام",
    "قول",
    "أقوال",
    "حرف",
    "حروف",
    "فعل",
    "أفعال",
    "لغة",
    "لغات",
    "كلمة",
    "كلمات",
    "اسم",
    "أسماء",
    "جملة",
    "جمل",
    "العربية",
    "مذكر",
    "مؤنث",
  ];
  const goodRep2 = [
    "كَلَام",
    "قَوْل",
    "أَقْوَال",
    "حَرْف",
    "حُرُوف",
    "فِعْل",
    "أَفْعَال",
    "لُغَة",
    "لُغَات",
    "كَلِمَة",
    "كَلِمَات",
    "اِسْم",
    "أَسْمَاء",
    "جُمْلَة",
    "جُمَل",
    "الْعَرَبِيَّة",
    "مُذَكَّر",
    "مُؤَنَّث",
  ];
  const corrections = [
    "كَلَام/كلام",
    "قَوْل/قول",
    "أَقْوَال/أقوال",
    "حَرْف/حرف",
    "حُرُوف/حروف",
    "فِعْل/فعل",
    "أَفْعَال/أفعال",
    "لُغَة/لغة",
    "لُغَات/لغات",
    "كَلِمَة/كلمة",
    "كَلِمَات/كلمات",
    "اِسْم/اسم",
    "أَسْمَاء/اسماء",
    "جُمْلَة/جملة",
    "جُمَل/جمل",
    "الْعَرَبِيَّة/العربية",
    "مُذَكَّر/مذكر",
    "مُؤَنَّث/مؤنث",
  ];

  const n = goodRep.length;

  // Parcourir les réponses
  for (let i = 0; i < n; i++) {
    const hasVowels = /[ًٌٍَُِّْ]/.test(results[i]);
    if (
      goodRep[i] !== results[i] &&
      (!hasVowels || goodRep2[i] !== results[i])
    ) {
      const isCorrect = false;
      for (const correctAnswer of [goodRep[i], goodRep2[i]]) {
        if (correctAnswer === results[i]) {
          isCorrect = true;
          break;
        }
      }
      if (!isCorrect) {
        document.getElementById(i).style.color = "#755503";
        document.getElementById(i).classList.remove("correct-answer");
        document.getElementById(i).value = corrections[i];
      }
    }
  }
};

let nbAttempts = 0;
const submitButton = document.querySelector(".submit");
const correctionButton = document.querySelector(".correct");
const resetButton = document.querySelector(".reset");

const resetForm = () => {
  // Effacer les valeurs des champs de saisie
  for (let i = 0; i <= 17; i++) {
    document.getElementById(i).value = "";
  }

  // Réinitialiser la couleur des textes en noir
  const allInputs = document.querySelectorAll("input[type='text']");
  allInputs.forEach((input) => {
    input.style.color = "black";
    input.classList.add("correct-answer");
  });

  // Fais defiler la page vers le haut de la section exercice
  const section = document.getElementById("exerciceSection");
  section.scrollIntoView({ behavior: "smooth" });
};

// Ajout de l'écouteur sur le bouton "Valider"
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  nbAttempts++;
  let allAnswersCorrect = true;

  if (nbAttempts === 1) {
    correctionButton.style.display = "inline-block";
  }
});

// Ajout de l'écouteur sur le bouton "Corriger"
correctionButton.addEventListener("click", (event) => {
  event.preventDefault();
  showCorrections();
  nbAttempts++;
  let allAnswersCorrect = true;

  // Vérifier si toutes les réponses sont correctes
  const allInputs = document.querySelectorAll("input[type='text']");
  allInputs.forEach((input) => {
    if (!input.classList.contains("correct-answer")) {
      allAnswersCorrect = false;
      return;
    }
  });
  if (nbAttempts === 2) {
    resetButton.style.display = "inline-block";
    correctionButton.style.display = "none";
  }
});

// Ajout de l'écouteur sur le bouton "Réinitialiser"
resetButton.addEventListener("click", (event) => {
  event.preventDefault();
  resetForm();
  nbAttempts = 0;
  correctionButton.style.display = "none";
  resetButton.style.display = "none";
});

// btnVocab
const btnVocab = document.querySelector(".btnVocab");
const Vocab = document.getElementById("vocabLI");
const exerciceSection = document.getElementById("exerciceSection");

function toggleVocab() {
  if (Vocab.classList.contains("Vocab-hidden")) {
    Vocab.classList.remove("Vocab-hidden");
    btnVocab.textContent = "Cacher le vocabulaire";
    Vocab.scrollIntoView({ behavior: "smooth" });
  } else {
    Vocab.classList.add("Vocab-hidden");
    btnVocab.textContent = "Afficher le vocabulaire";
    exerciceSection.scrollIntoView({ behavior: "smooth" });
  }
}

btnVocab.addEventListener("click", toggleVocab);
