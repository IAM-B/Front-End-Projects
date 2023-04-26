// Fonction qui fais defiler la page jusqu'au vocabulaire
setTimeout(function () {
  let section = document.getElementById("vocabLIEx1");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}, 2000);

// Définir les IDs des exercices dans un tableau
const exerciceIds = ["exercice-1", "exercice-2"];

// Définir les templates HTML des exercices
const exerciceTemplates = [
  `<section id="exercice-1">
  <div id="vocabLIEx1" class="exercice">
    <fieldset style="background: rgba(255, 255, 255, 0.7)">
      <legend class="vocabFR">vocabulaires 1</legend>
      <form id="exo" name="exo">
        <div class="vocabulary">
          <label class="vocabFR">Parole(s), propos :</label>
          <div class="inline-elements">
            <span class="vocabAR">أَقْوَالٌ</span>
            <span class="vocabAR or">/</span>
            <span class="vocabAR">قَوْلٌ</span>
            <span class="vocabAR or">ou</span>
            <span class="vocabAR">كَلَامٌ</span>
          </div>
        </div>
        <div class="vocabulary">
          <label class="vocabFR"
            >Lettre(s) de l’alphabet, particule(s) :</label
          >
          <div class="inline-elements">
            <span class="vocabAR">حُرُوفٌ</span>
            <span class="vocabAR or">/</span>
            <span class="vocabAR">حَرْفٌ</span>
          </div>
        </div>
        <div class="vocabulary">
          <label class="vocabFR">Verbe(s) :</label>
          <div class="inline-elements">
            <span class="vocabAR">أفْعَالٌ</span>
            <span class="vocabAR or">/</span>
            <span class="vocabAR">فِعْلٌ</span>
          </div>
        </div>
        <div class="vocabulary">
          <label class="vocabFR">Langue(s) vivante(s) :</label>
          <div class="inline-elements">
            <span class="vocabAR">لُغَاتٌ</span>
            <span class="vocabAR or">/</span>
            <span class="vocabAR">لُغَةٌ</span>
          </div>
        </div>
        <div class="vocabulary">
          <label class="vocabFR">Mot(s) :</label>
          <div class="inline-elements">
            <span class="vocabAR">كَلِمَاتٌ</span>
            <span class="vocabAR or">/</span>
            <span class="vocabAR">كَلِمَةٌ</span>
          </div>
        </div>
        <div class="vocabulary">
          <label class="vocabFR">Nom(s) :</label>
          <div class="inline-elements">
            <span class="vocabAR">أَسْمَاءٌ</span>
            <span class="vocabAR or">/</span>
            <span class="vocabAR">اِسْمٌ</span>
          </div>
        </div>
        <div class="vocabulary">
          <label class="vocabFR">Phrase(s) :</label>
          <div class="inline-elements">
            <span class="vocabAR">جُمَلٌ</span>
            <span class="vocabAR or">/</span>
            <span class="vocabAR">جُمْلَةٌ</span>
          </div>
        </div>
        <div class="vocabulary">
          <label class="vocabFR">L’arabe (langue) :</label>
          <div class="inline-elements">
            <span class="vocabAR">الْعَرَبِيَّةُ</span>
          </div>
        </div>
        <div class="vocabulary">
          <label class="vocabFR">Masculin :</label>
          <div class="inline-elements">
            <span class="vocabAR">مُذَكَّرٌ</span>
          </div>
        </div>
        <div class="vocabulary">
          <label class="vocabFR">Féminin :</label>
          <div class="inline-elements">
            <span class="vocabAR">مُؤَنَّثٌ</span>
          </div>
        </div>
      </form>
    </fieldset>
  </div>
  <button class="btnVocab" type="button">Cacher le vocabulaire</button>
  <div id="exerciceSectionEx1">
    <div class="exercice">
      <fieldset style="background: rgba(255, 255, 255, 0.7)">
        <legend class="vocabFR">exercices</legend>
        <form id="Ex1" name="exo">
          <div class="vocabulary">
            <label class="vocabFR">Parole(s), propos :</label>
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… / اَلْجَمْعُ"
                class="InputFill"
                id="Ex1-2"
                autocomplete="off"
              />
              <input
                type="text"
                required=""
                placeholder="… ou "
                class="InputFill"
                id="Ex1-1"
                autocomplete="off"
              />
              <input
                type="text"
                required=""
                placeholder="… "
                class="InputFill"
                id="Ex1-0"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="vocabulary">
            <label class="vocabFR"
              >Lettre(s) de l’alphabet, particule(s) :</label
            >
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… / اَلْجَمْعُ"
                class="InputFill"
                id="Ex1-4"
                autocomplete="off"
              />
              <input
                type="text"
                required=""
                placeholder="… "
                class="InputFill"
                id="Ex1-3"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="vocabulary">
            <label class="vocabFR">Verbe(s) :</label>
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… / اَلْجَمْعُ"
                class="InputFill"
                id="Ex1-6"
                autocomplete="off"
              />
              <input
                type="text"
                required=""
                placeholder="… "
                class="InputFill"
                id="Ex1-5"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="vocabulary">
            <label class="vocabFR">Langue(s) vivante(s) :</label>
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… / اَلْجَمْعُ"
                class="InputFill"
                id="Ex1-8"
                autocomplete="off"
              />
              <input
                type="text"
                required=""
                placeholder="… "
                class="InputFill"
                id="Ex1-7"
                autocomplete="off"
              />
            </div>
          </div>

          <div class="vocabulary">
            <label class="vocabFR">Mot(s) :</label>
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… / اَلْجَمْعُ"
                class="InputFill"
                id="Ex1-10"
                autocomplete="off"
              />
              <input
                type="text"
                required=""
                placeholder="… "
                class="InputFill"
                id="Ex1-9"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="vocabulary">
            <label class="vocabFR">Nom(s) :</label>
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… / اَلْجَمْعُ"
                class="InputFill"
                id="Ex1-12"
                autocomplete="off"
              />
              <input
                type="text"
                required=""
                placeholder="… "
                class="InputFill"
                id="Ex1-11"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="vocabulary">
            <label class="vocabFR">Phrase(s) :</label>
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… / اَلْجَمْعُ"
                class="InputFill"
                id="Ex1-14"
                autocomplete="off"
              />
              <input
                type="text"
                required=""
                placeholder="… "
                class="InputFill"
                id="Ex1-13"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="vocabulary">
            <label class="vocabFR">L’arabe (langue) :</label>
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… "
                class="InputFill"
                id="Ex1-15"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="vocabulary">
            <label class="vocabFR">Masculin :</label>
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… "
                class="InputFill"
                id="Ex1-16"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="vocabulary">
            <label class="vocabFR">Féminin :</label>
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… "
                class="InputFill"
                id="Ex1-17"
                autocomplete="off"
              />
            </div>
          </div>
          <div id="AffEx1"></div>
          <div class="correction">
            <button class="btnExo submit" type="button" onclick="vocab();">
              Valider
            </button>
            <button
              id="checkButtonEx1"
              class="btnExo correct"
              type="button"
              onclick="showCorrections()"
            >
              Corriger
            </button>
            <button class="btnExo reset" onclick="resetForm()">
              Réessayer
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  </div>
</section>`,
  `<section id="exercice-2">
  <div id="vocabLIEx2" class="exercice">
    <fieldset style="background: rgba(255, 255, 255, 0.7)">
      <legend class="vocabFR">vocabulaires 2</legend>
      <form id="exo" name="exo">
        <div class="vocabulary">
          <label class="vocabFR">Écrire :</label>
          <div class="inline-elements">
            <span class="vocabAR">كَتَبَ</span>
          </div>
        </div>
        <div class="vocabulary">
          <label class="vocabFR">Étudier :</label>
          <div class="inline-elements">
            <span class="vocabAR">دَرَسَ</span>
          </div>
        </div>
        <div class="vocabulary">
          <label class="vocabFR">Élève(s) :</label>
          <div class="inline-elements">
            <span class="vocabAR">تَلَامِيذ</span>
            <span class="vocabAR or">/</span>
            <span class="vocabAR">تِلْمِيذ</span>
          </div>
        </div>
        <div class="vocabulary">
          <label class="vocabFR">Leçon(s), cours :</label>
          <div class="inline-elements">
            <span class="vocabAR">دُرُوس</span>
            <span class="vocabAR or">/</span>
            <span class="vocabAR">دَرْس</span>
          </div>
        </div>
        <div class="vocabulary">
          <label class="vocabFR">Croyant :</label>
          <div class="inline-elements">
            <span class="vocabAR">مُؤْمِن</span>
          </div>
        </div>
        <div class="vocabulary">
          <label class="vocabFR">S’asseoir : </label>
          <div class="inline-elements">
            <span class="vocabAR">جَلَسَ</span>
          </div>
        </div>
        <div class="vocabulary">
          <label class="vocabFR">École(s) :</label>
          <div class="inline-elements">
            <span class="vocabAR">مَدَارِس</span>
            <span class="vocabAR or">/</span>
            <span class="vocabAR">مَدْرَسَة</span>
          </div>
        </div>
        <div class="vocabulary">
          <label class="vocabFR">Étudiant(s) :</label>
          <div class="inline-elements">
            <span class="vocabAR">طُلَّاب</span>
            <span class="vocabAR or">/</span>
            <span class="vocabAR">طَالِب</span>
          </div>
        </div>
        <div class="vocabulary">
          <label class="vocabFR">Texte(s) :</label>
          <div class="inline-elements">
            <span class="vocabAR">نُصُوص</span>
            <span class="vocabAR or">/</span>
            <span class="vocabAR">نَصّ</span>
          </div>
        </div>
        <div class="vocabulary">
          <label class="vocabFR">Enseignant :</label>
          <div class="inline-elements">
            <span class="vocabAR">مُعَلِّم</span>
            <span class="or">ou</span>
            <span class="vocabAR">مُدَرِّس</span>
          </div>
        </div>
      </form>
    </fieldset>
  </div>
  <button class="btnVocab" type="button">Cacher le vocabulaire</button>
  <div id="exerciceSectionEx2">
    <div class="exercice">
      <fieldset style="background: rgba(255, 255, 255, 0.7)">
        <legend class="vocabFR">exercices</legend>
        <form id="Ex2" name="exo">
          <div class="vocabulary">
            <label class="vocabFR">Écrire :</label>
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… / اَلْجَمْعُ"
                class="InputFill"
                id="Ex2-0"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="vocabulary">
            <label class="vocabFR">Étudier :</label>
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… "
                class="InputFill"
                id="Ex2-1"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="vocabulary">
            <label class="vocabFR">Élève(s) :</label>
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… / اَلْجَمْعُ"
                class="InputFill"
                id="Ex2-3"
                autocomplete="off"
              />
              <input
                type="text"
                required=""
                placeholder="… "
                class="InputFill"
                id="Ex2-2"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="vocabulary">
            <label class="vocabFR">Leçon(s), cours :</label>
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… / اَلْجَمْعُ"
                class="InputFill"
                id="Ex2-5"
                autocomplete="off"
              />
              <input
                type="text"
                required=""
                placeholder="… "
                class="InputFill"
                id="Ex2-4"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="vocabulary">
            <label class="vocabFR">Croyant :</label>
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… "
                class="InputFill"
                id="Ex2-6"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="vocabulary">
            <label class="vocabFR">S’asseoir :</label>
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… "
                class="InputFill"
                id="Ex2-7"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="vocabulary">
            <label class="vocabFR">École(s) :</label>
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… / اَلْجَمْعُ"
                class="InputFill"
                id="Ex2-9"
                autocomplete="off"
              />
              <input
                type="text"
                required=""
                placeholder="… "
                class="InputFill"
                id="Ex2-8"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="vocabulary">
            <label class="vocabFR">Étudiant(s) :</label>
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… / اَلْجَمْعُ"
                class="InputFill"
                id="Ex2-11"
                autocomplete="off"
              />
              <input
                type="text"
                required=""
                placeholder="… "
                class="InputFill"
                id="Ex2-10"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="vocabulary">
            <label class="vocabFR">Texte(s) :</label>
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… / اَلْجَمْعُ"
                class="InputFill"
                id="Ex2-13"
                autocomplete="off"
              />
              <input
                type="text"
                required=""
                placeholder="… "
                class="InputFill"
                id="Ex2-12"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="vocabulary">
            <label class="vocabFR">Enseignant :</label>
            <div class="inline-elements">
              <input
                type="text"
                required=""
                placeholder="… ou "
                class="InputFill"
                id="Ex2-15"
                autocomplete="off"
              />
              <input
                type="text"
                required=""
                placeholder="… "
                class="InputFill"
                id="Ex2-14"
                autocomplete="off"
              />
            </div>
          </div>
          <div id="Aff"></div>
          <div class="correction">
            <button class="btnExo submit" type="button" onclick="vocab();">
              Valider
            </button>
            <button
              id="checkButtonEx2"
              class="btnExo correct"
              type="button"
              onclick="showCorrections()"
            >
              Corriger
            </button>
            <button class="btnExo reset" onclick="resetForm()">
              Réessayer
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  </div>
</section>`
];

// Récupérer l'index de l'exercice actuel stocké dans le localStorage
let currentExerciceIndex = parseInt(localStorage.getItem("currentExerciceIndex"));

// Si aucun exercice n'a encore été réalisé, on commence par le premier
if (isNaN(currentExerciceIndex)) {
  currentExerciceIndex = 0;
}

// Ajouter dynamiquement les exercices au DOM
const exercicesContainer = document.getElementById("exercices-container");
if (exercicesContainer) {
  exerciceTemplates.forEach((template, index) => {
    const exercice = document.createElement("div");
    exercice.innerHTML = template;
    exercicesContainer.appendChild(exercice);

    if (index !== currentExerciceIndex) {
      exercice.style.display = "none";
    }
  });
}

// Mettre à jour l'index de l'exercice actuel pour le prochain chargement de la page
currentExerciceIndex++;
if (currentExerciceIndex >= exerciceIds.length) {
  currentExerciceIndex = 0;
}
localStorage.setItem("currentExerciceIndex", currentExerciceIndex.toString());
