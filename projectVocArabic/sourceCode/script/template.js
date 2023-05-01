const vocabularies = [
  {
    fr: "Parole(s), propos :",
    ar: ["أَقْوَال", "/", "قَوْل", "ou", "كَلَام"],
  },
  {
    fr: "Lettre(s) de l’alphabet, particule(s) :",
    ar: ["حُرُوف", "/", "حَرْف"],
  },
  {
    fr: "Verbe(s) :",
    ar: ["أفْعَال", "/", "فِعْل"],
  },
  {
    fr: "Langue(s) vivante(s) :",
    ar: ["لُغَات", "/", "لُغَة"],
  },
  {
    fr: "Mot(s) :",
    ar: ["كَلِمَات", "/", "كَلِمَة"],
  },
  {
    fr: "Nom(s) :",
    ar: ["أَسْمَاء", "/", "اِسْم"],
  },
  {
    fr: "Phrase(s) :",
    ar: ["جُمَل", "/", "جُمْلَة"],
  },
  {
    fr: "L’arabe (langue) :",
    ar: ["الْعَرَبِيَّة"],
  },
  {
    fr: "Masculin :",
    ar: ["مُذَكَّر"],
  },
  {
    fr: "Féminin :",
    ar: ["مُؤَنَّث"],
  },
];

// Fonction pour créer les éléments span HTML pour la section vocabulaire
function createVocabularySection(vocabulary) {
  const vocabDiv = document.createElement("div");
  vocabDiv.classList.add("vocabulary");

  const label = document.createElement("label");
  label.classList.add("vocabFR");
  label.textContent = vocabulary.fr;
  vocabDiv.appendChild(label);

  const inlineVocabDiv = document.createElement("div");
  inlineVocabDiv.classList.add("inline-vocabulary");

  for (let i = 0; i < vocabulary.ar.length; i++) {
    const span = document.createElement("span");
    span.classList.add("vocabAR");
    span.textContent = vocabulary.ar[i];

    if (vocabulary.ar[i] === "/") {
      span.classList.add("or");
    } else if (vocabulary.ar[i] === "ou") {
      span.classList.add("and");
    }

    inlineVocabDiv.appendChild(span);
  }

  vocabDiv.appendChild(inlineVocabDiv);

  return vocabDiv;
}

// Fonction pour générer les éléments HTML pour toutes les sections de vocabulaire
function generateVocabularies() {
  const exoForm = document.getElementById("vocab");

  for (let i = 0; i < vocabularies.length; i++) {
    const vocabSection = createVocabularySection(vocabularies[i]);
    exoForm.appendChild(vocabSection);
  }
}

// Appel de la fonction pour générer les éléments HTML
generateVocabularies();


// Fonction pour créer les éléments input HTML pour la section exercice
let counter = -1;

vocabularies.forEach((vocab, index) => {
  const vocabularyDiv = document.createElement("div");
  vocabularyDiv.classList.add("vocabulary");

  const vocabLabel = document.createElement("label");
  vocabLabel.classList.add("vocabFR");
  vocabLabel.textContent = vocab.fr;

  const inputDiv = document.createElement("div");
  inputDiv.classList.add("inline-input");
  
  vocab.ar.reverse().forEach((word, i) => {
    if (word !== "/" && word !== "ou") {
      const vocabInput = document.createElement("input");
      vocabInput.setAttribute("type", "text");
      vocabInput.setAttribute("required", "");
      vocabInput.classList.add("InputFill");
      vocabInput.setAttribute("autocomplete", "off");
  
      vocabInput.setAttribute("id", `input-${counter}`);
      counter++;

      if (i > 0 && (vocab.ar[i - 1] === "/" || vocab.ar[i - 1] === "ou")) {
        if (vocab.ar[i - 1] === "/") {
          vocabInput.setAttribute(
            "placeholder",
            `...${vocab.ar[i - 1]} اَلْجَمْعُ`
          );
          console.log(
            `input-${counter}correspond à : ...${
              vocab.ar[i - 1]
            } اَلْجَمْعُ ${word}`
          );
        } else {
          vocabInput.setAttribute("placeholder", `...${vocab.ar[i - 1]}`);
          console.log(
            `input-${counter}correspond à : ...${vocab.ar[i - 1]} ${word}`
          );
        }
      } else {
        vocabInput.setAttribute("placeholder", "...");
        console.log(`input-${counter}correspond à : ${word}`);
      }

      vocabInput.setAttribute("id", `${counter}`);
      inputDiv.insertBefore(vocabInput, inputDiv.firstChild);
    }
  });

  vocabularyDiv.appendChild(vocabLabel);
  vocabularyDiv.appendChild(inputDiv);
  document.querySelector("#exo").appendChild(vocabularyDiv);
});


