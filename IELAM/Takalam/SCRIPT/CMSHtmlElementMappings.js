// Menu Integration sidemenu-content
function executeScriptBelow992() {
  const modules = document.querySelector(".shrink-0");
  const sideMenu = document.querySelector(".sidemenu-content");

  if (modules && sideMenu) {
    const menuModule = document.createElement("div");
    menuModule.classList.add("menu-modules");

    sideMenu.appendChild(menuModule);
    menuModule.appendChild(modules);
  }
}
function checkScreenWidth() {
  if (window.innerWidth < 992.98) {
    executeScriptBelow992();
  }
}
checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);

// Function to move to the next exercise if validated
function goToNextExercise() {
  const currentIndex = exerciceIds.indexOf(section.id);

  if (currentIndex >= 0 && currentIndex < exerciceIds.length - 1) {
    const nextIndex = currentIndex + 2;
    console.log("nextIndex" + nextIndex);
    const nextExercice = document.querySelector("#btn" + `${nextIndex}`);
    if (nextExercice) {
      setTimeout(() => {
        const modalClosure = document.getElementById("Aff");
        if (modalClosure) {
          nextExercice.click();
          setTimeout(() => {
            modalClosure.innerHTML = "";
          }, 1000);
        } else {
          console.error("L'élément .modal-container n'a pas été trouvé.");
        }
      }, 3000);
    }
  } else {
    const completedExercice = document.querySelector(
      ".membership-layout__complete-lecture-button"
    );
    if (completedExercice) {
      setTimeout(() => {
        completedExercice.click();
      }, 3000);
    } else {
      console.error(
        "L'élément avec la classe 'membership-layout__complete-lecture-button' n'a pas été trouvé."
      );
    }
  }
}

(function () {
  try {
    let iframeOrigin = window.location.origin; // Obtient l'origine de l'iframe
    let parentOrigin;

    // Tente d'accéder à l'origine de la fenêtre parente
    // Notez que ceci peut lever une exception de sécurité si les origines sont différentes
    parentOrigin = window.parent.location.origin;

    console.log("Origine de l'Iframe: " + iframeOrigin);
    console.log("Origine de la page parente: " + parentOrigin);

    if (iframeOrigin === parentOrigin) {
      console.log("L'Iframe et la page parente sont du même domaine.");
    } else {
      console.log("L'Iframe et la page parente ne sont pas du même domaine.");
    }
  } catch (error) {
    console.error("Impossible de comparer les origines. Erreur: ", error);
  }
})();

(function () {
  const message = {
    type: "interactionRequest",
    content: "Demande d'interaction depuis l'iframe",
  };

  console.log("Envoi du message à la page parente:", message);

  try {
    window.parent.postMessage(message, "https://www.i3lam.net"); // Utilisez l'origine spécifique si possible pour des raisons de sécurité
    console.log("Message envoyé avec succès.");
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error);
  }
})();
