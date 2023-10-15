// Function that redirects to the top of the page on reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Function that makes the loader disappear
setTimeout(function () {
  const loader = document.querySelector(".loader-wrapper");
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

// Event listener for scroll on the nav bar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navwrapper");
  const sectionExercice1 = document.querySelector("#main-section");

  if (sectionExercice1) {
    const sectionTop = sectionExercice1.offsetTop + 30;
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
    localStorage.setItem("preferredTheme", "light");
  }
});

// Menu Integration sidemenu-content
function executeScriptBelow992() {
  const progressBar = document.querySelector(".course-info__progress-bar");
  const modules = document.querySelector(".course-info__modules");
  const sideMenu = document.querySelector(".sidemenu-content");

  if (progressBar && modules && sideMenu) {
    const menuModule = document.createElement("div");
    menuModule.classList.add("menu-modules");

    sideMenu.appendChild(menuModule);
    menuModule.appendChild(progressBar);
    menuModule.appendChild(modules);
  }
}
function checkScreenWidth() {
  if (window.innerWidth < 992.98) {
    executeScriptBelow992();
  }
}
window.addEventListener("DOMContentLoaded", checkScreenWidth);
window.addEventListener("resize", checkScreenWidth);

// Function that redirects to the main-section section after loading
function redirectToSection() {
  setTimeout(function () {
    const section = document.getElementById("main-section");
    const offset = section.offsetTop;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }, 2000);
}

// Function share button
const shareButtonOne = document.getElementById("shareButtonOne");
const shareButtonTow = document.getElementById("shareButtonTow");
shareButtonOne.onclick = function () {
  shareSocialMedia()
}
shareButtonTow.onclick = function () {
  shareSocialMedia()
}
function shareSocialMedia() {

  if (navigator.share) {
    navigator
      .share({
        title: "Iلعam",
        url: window.location.href,
      })
      .then(() => console.log("Sharing succefull"))
      .catch((error) => console.error("Failed sharing: ", error));
  } else {
    const shareOptions = {
      title: "Iلعam",
      url: window.location.href,
    };

    const socialMedia = [
      {
        name: "Facebook",
        url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareOptions.url
        )}`,
      },
      {
        name: "Twitter",
        url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          shareOptions.url
        )}&text=${encodeURIComponent(shareOptions.text)}`,
      },
      {
        name: "Telegram",
        url: `https://t.me/share/url?url=${encodeURIComponent(
          shareOptions.url
        )}&text=${encodeURIComponent(shareOptions.text)}`,
      },
      {
        name: "WhatsApp",
        url: `whatsapp://send?text=${encodeURIComponent(
          shareOptions.text + " " + shareOptions.url
        )}`,
      },
      {
        name: "LinkedIn",
        url: `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
          shareOptions.url
        )}&title=${encodeURIComponent(shareOptions.title)}`,
      },
    ];

    const shareMenu = document.createElement("div");
    shareMenu.classList.add("share-menu");

    socialMedia.forEach((platform) => {
      const shareLink = document.createElement("a");
      shareLink.textContent = `Partager sur ${platform.name}`;
      shareLink.href = platform.url;
      shareLink.target = "_blank";
      shareMenu.appendChild(shareLink);
    });

    document.body.appendChild(shareMenu);
  }
};