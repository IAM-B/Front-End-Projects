// Fonction qui redirige a la section vocabulaire apres chargement
function redirectToSection() {
  const section = document.getElementById("vocabLI");
  const offset = section.offsetTop - 70;
  window.scrollTo({ top: offset, behavior: "smooth" });
}

// Fonction qui redirige en haut de page au rechargement
window.onbeforeunload = function() {
    window.scrollTo( 0, 0);
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
    document.querySelector(".nav a").style.color = "black";
    document.querySelector(".logo").classList.add("hidLogo");
  } else {
    document.querySelector(".navwrapper").classList.remove("notonhomepage");
    document.querySelector(".nav a").style.color = "black";
    document.querySelector(".logo").classList.remove("hidLogo");
  }
});

// Ecoute evenement click toggle menu burger
const toggleMenu = document.querySelector(".toggleMenu");
const sidemenu = document.querySelector(".sidemenu");

toggleMenu.addEventListener("click", () => {
  if (!toggleMenu.classList.contains("active")) {
    sidemenu.classList.add("showmenu");
    toggleMenu.classList.add("active");
  } else {
    sidemenu.classList.remove("showmenu");
    toggleMenu.classList.remove("active");
  }
});

