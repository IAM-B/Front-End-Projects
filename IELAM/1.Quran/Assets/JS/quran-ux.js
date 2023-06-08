// Function that redirects to the top of the page on reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Function that makes the loader disappear
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

// Event listener for scroll on the nav bar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navwrapper");
  const sectionExercice1 = document.querySelector("main");

  if (sectionExercice1) {
    const sectionTop = sectionExercice1.offsetTop;
    const scrollTop = window.pageYOffset;

    if (scrollTop > sectionTop) {
      navbar.classList.add("notonhomepage");
    } else {
      navbar.classList.remove("notonhomepage");
    }
  }
});

// Listen to click event for toggling the burger menu
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
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
if (!preferredTheme) {
  body.classList.toggle(systemTheme);
  localStorage.setItem("preferredTheme", systemTheme);
} else {
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

// Function that redirects to the Quran section after loading
function redirectToSection() {
  setTimeout(function () {
    const section = document.getElementById("quran-section");
    const offset = section.offsetTop;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }, 2000);
}
