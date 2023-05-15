// Fonction qui redirige a la section vocabulaire apres chargement
function redirectToSection() {
  const section = document.getElementById("vocabLI");
  const offset = section.offsetTop - 100;
  window.scrollTo({ top: offset, behavior: "smooth" });
}

// Fonction qui redirige en haut de page au rechargement
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Fonction qui fait disparaitre le loader
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader-wrapper");
  if (loader) {
    setTimeout(function () {
      loader.classList.add("hide");
      setTimeout(function () {
        const imgBG = document.querySelector(".loader-wrapper");
        if (imgBG) {
          imgBG.remove();
          setTimeout(function () {
            redirectToSection();
          }, 1000);
        }
      }, 1000);
    }, 5000);
  }
});

// Ecoute evenement click nav bar
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

// Ecoute evenement scroll nav bar
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 95) {
    document.querySelector(".navwrapper").classList.add("notonhomepage");
    document.querySelector(".logo").classList.add("hidLogo");
  } else {
    document.querySelector(".navwrapper").classList.remove("notonhomepage");
    document.querySelector(".logo").classList.remove("hidLogo");
  }
});

// Ecoute evenement click toggle menu burger
const toggleMenu = document.querySelector(".toggleMenu");
const sidemenu = document.querySelector(".sidemenu");
const overlay = document.querySelector(".sidemenu-overlay");

toggleMenu.addEventListener("click", () => {
  if (!toggleMenu.classList.contains("active")) {
    sidemenu.classList.add("showmenu");
    toggleMenu.classList.add("active");
    overlay.style.display = "block";
    overlay.style.opacity = "1";
  } else {
    sidemenu.classList.remove("showmenu");
    toggleMenu.classList.remove("active");
    overlay.style.display = "none";
    overlay.style.opacity = "0";
  }
});

const rangeInput = document.getElementById("theme-slider");
      const body = document.body;

      rangeInput.addEventListener("input", () => {
        const max = rangeInput.max > 0 ? rangeInput.max : 100;
        const progress = rangeInput.value / rangeInput.max;

        const couleurFondClair = [228, 235, 245];
        const couleurContrastClair = [206, 212, 220];
        const couleurBtnClair = [3, 28, 64];
        const boxShadowIntClair = [255, 255, 255, 0.267];
        const boxShadowIntClair2 = [137, 142, 146, 0.267];
        const boxShadowOutClair = [255, 255, 255, 0.267];
        const boxShadowOutClair2 = [137, 142, 146, 0.267];

        const couleurFondSombre = [13, 17, 23];
        const couleurContrastSombre = [49, 54, 59];
        const couleurBtnSombre = [228, 235, 245];
        const boxShadowIntSombre = [0, 0, 0, 0.267];
        const boxShadowIntSombre2 = [137, 142, 146, 0.267];
        const boxShadowOutSombre = [0, 0, 0, 0.267];
        const boxShadowOutSombre2 = [137, 142, 146, 0.267];
        

        const couleurFond = interpolateColors(
          couleurFondClair,
          couleurFondSombre,
          progress
        );

        body.classList.add("theme-transition");
        body.style.backgroundColor = `rgb(${couleurFond.join(", ")})`;

        // Mettre à jour les variables CSS dans le style tag
        const varCss = document.getElementById("varCss");
        varCss.innerHTML = `
            :root {
              --couleur-fond-clair: rgb(${couleurFondClair.join(", ")});
              --couleur-contrast-clair: rgb(${couleurContrastClair.join(", ")});
              --couleur-btn-clair: rgb(${couleurBtnClair.join(", ")});
              --couleur-box-shadow-int-clair: inset -3px -3px 3px rgba(${boxShadowIntClair.join(", ")}),
              inset 3px 3px 3px rgba(${boxShadowIntClair2.join(", ")});
              --couleur-box-shadow-out-clair: -3px -3px 3px rgba(${boxShadowOutClair.join(", ")}),
              3px 3px 3px rgba(${boxShadowOutClair2.join(", ")});
              --couleur-fond-sombre: rgb(${couleurFondSombre.join(", ")});
              --couleur-contrast-sombre: rgb(${couleurContrastSombre.join(", ")});
              --couleur-btn-sombre: rgb(${couleurBtnSombre.join(", ")});
              --couleur-box-shadow-int-sombre: inset -3px -3px 3px rgba(${boxShadowIntSombre.join(", ")}),
              inset 3px 3px 3px rgba(${boxShadowIntSombre2.join(", ")});
              --couleur-box-shadow-out-sombre: -3px -3px 3px rgba(${boxShadowOutSombre.join(", ")}),
              3px 3px 3px rgba(${boxShadowOutSombre2.join(", ")});
                ", "
              )});
            }
          `;
      });

      function interpolateColors(color1, color2, progress) {
        const r = Math.round(color1[0] + (color2[0] - color1[0]) * progress);
        const g = Math.round(color1[1] + (color2[1] - color1[1]) * progress);
        const b = Math.round(color1[2] + (color2[2] - color1[2]) * progress);

        return [r, g, b];
      }