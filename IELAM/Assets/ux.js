// Fonction qui redirige a la section vocabulaire apres chargement
function redirectToSection() {
  setTimeout(function () {
  const section = document.getElementById("vocabLI");
  const offset = section.offsetTop - 100;
  window.scrollTo({ top: offset, behavior: "smooth" });
  }, 2000);
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
  const navbar = document.querySelector(".navwrapper");
  const sectionExercice1 = document.getElementById("exercice-1");
  
  if (sectionExercice1) {
    const sectionTop = sectionExercice1.offsetTop - 99;
    const scrollTop = window.pageYOffset;
    
    if (scrollTop > sectionTop) {
      navbar.classList.add("notonhomepage");
    } else {
      navbar.classList.remove("notonhomepage");
    }
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

// Function switch theme dark/light
const switchInput = document.getElementById("theme-switch");
const body = document.body;
const preferredTheme = localStorage.getItem("preferredTheme");
if (preferredTheme) {
  body.classList.toggle(preferredTheme);
}

switchInput.addEventListener("change", function () {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("preferredTheme", "dark");
  } else {
    localStorage.setItem("preferredTheme", "");
  }
});
