  window.addEventListener("load", function () {
    const loader = document.querySelector(".loader-wrapper");
    if (loader) {
      setTimeout(function () {
        loader.classList.add("hide");
        setTimeout(function () {
          const imgBG = document.querySelector(".loader-wrapper");
          if (imgBG) {
            imgBG.remove();
          }
        }, 1000);
      }, 5000);
    }
  });

  // Fonction qui fait remonter la page en haut lors du rafraîchissement
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

