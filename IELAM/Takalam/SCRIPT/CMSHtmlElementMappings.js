// Menu Integration sidemenu-content
// function executeScriptBelow992() {
//   const modules = document.querySelector(".shrink-0");
//   const sideMenu = document.querySelector(".sidemenu-content");

//   if (modules && sideMenu) {
//     const menuModule = document.createElement("div");
//     menuModule.classList.add("menu-modules");

//     sideMenu.appendChild(menuModule);
//     menuModule.appendChild(modules);
//   }
// }
// function checkScreenWidth() {
//   if (window.innerWidth < 992.98) {
//     executeScriptBelow992();
//   }
// }
// checkScreenWidth();
// window.addEventListener("resize", checkScreenWidth);

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
