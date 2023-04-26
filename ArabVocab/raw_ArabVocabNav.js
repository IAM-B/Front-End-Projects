const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  console.log(document.querySelectorAll(".navlist li"));

  /************************ to highlight on which section you are ****************/

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

  /**************** to change from trans to color when scrolled *************/

  console.log(window.pageYOffset);

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

  /******************** hide and show nav *************************/

  document.querySelector(".toggleMenu").addEventListener("click", () => {
    document.querySelector(".sidemenu").classList.add("showmenu");
    document.querySelector(".toggleMenu").classList.add("changeopacity");
  });

  document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector(".sidemenu").classList.remove("showmenu");
    document.querySelector(".toggleMenu").classList.remove("changeopacity");
  });

  /************************* menu scales when scrolled ****************************/

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 250) {
      document.querySelector(".toggleMenu").style.padding = "9px 12px 9px 9px";
    } else {
      document.querySelector(".toggleMenu").style.padding =
        "15px 20px 15px 15px";
    }
  });
});
