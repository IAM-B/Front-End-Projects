function redirectToSection() {
  const section = document.getElementById("vocabLI");
  const offset = section.offsetTop - 70;
  window.scrollTo({ top: offset, behavior: "smooth" });
}

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

window.onbeforeunload = function () {
  window.scrollTo(0, 0, {behavior: "smooth"});
};

const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
});

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
    document.querySelector(".toggleMenu").style.padding = "15px 20px 15px 15px";
  }
});
