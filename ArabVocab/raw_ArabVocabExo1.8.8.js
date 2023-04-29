function initArabVocab() {
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
      "https://cdn.jsdelivr.net/gh/IAM-B/public_file@main/ArabVocabBoard/vocab1/app1.js",
    "exercice-2":
      "https://cdn.jsdelivr.net/gh/IAM-B/public_file@main/ArabVocabBoard/vocab2/app2.js",
    "exercice-3":
      "https://cdn.jsdelivr.net/gh/IAM-B/public_file@main/ArabVocabBoard/vocab3/app3.js",
    "exercice-4":
      "https://cdn.jsdelivr.net/gh/IAM-B/public_file@main/ArabVocabBoard/vocab4/app4.js",
    "exercice-5":
      "https://cdn.jsdelivr.net/gh/IAM-B/public_file@main/ArabVocabBoard/vocab5/app5.js",
    "exercice-6":
      "https://cdn.jsdelivr.net/gh/IAM-B/public_file@main/ArabVocabBoard/vocab6/app6.js",
    "exercice-7":
      "https://cdn.jsdelivr.net/gh/IAM-B/public_file@main/ArabVocabBoard/vocab7/app7.js",
    "exercice-8":
      "https://cdn.jsdelivr.net/gh/IAM-B/public_file@main/ArabVocabBoard/vocab8/app8.js",
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

  const burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
  });
}

function initNav() {
  const navListItems = document.querySelectorAll(".navlist li");
  navListItems.forEach((navListItem) => {
    navListItem.addEventListener("click", () => {
      navListItem.classList.add("iamselected");
      navListItems.forEach((otherNavItem) => {
        if (otherNavItem !== navListItem) {
          otherNavItem.classList.remove("iamselected");
        }
      });
    });
  });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 95) {
      document.querySelector(".navwrapper").classList.add("notonhomepage");
      document.querySelector(".nav a").style.color = "white";
      document.querySelector(".logo").classList.add("hideme");
    } else {
      document.querySelector(".navwrapper").classList.remove("notonhomepage");
      document.querySelector(".nav a").style.color = "black";
      document.querySelector(".logo").classList.remove("hideme");
    }
  });

  document.querySelector(".toggleMenu").addEventListener("click", () => {
    document.querySelector(".sidemenu").classList.add("showmenu");
    document.querySelector(".toggleMenu").classList.add("changeopacity");
  });

  document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector(".sidemenu").classList.remove("showmenu");
    document.querySelector(".toggleMenu").classList.remove("changeopacity");
  });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 250) {
      document.querySelector(".toggleMenu").style.padding = "9px 12px 9px 9px";
    } else {
      document.querySelector(".toggleMenu").style.padding =
        "15px 20px 15px 15px";
    }
  });
}
