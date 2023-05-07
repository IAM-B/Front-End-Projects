// Sélectionner tous les éléments avec la classe "button"
const buttons = document.querySelectorAll(".button");

// Ajouter un écouteur d'événement click à chaque bouton
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonId = this.getAttribute("id");
    const modalContainer = document.getElementById("modal-container");
    modalContainer.removeAttribute("class");
    modalContainer.classList.add(buttonId);
    document.body.classList.add("modal-active");
  });
});

// Sélectionner l'élément avec l'id "modal-container"
const modalContainer = document.getElementById("modal-container");

// Ajouter un écouteur d'événement click à l'élément modal-container
modalContainer.addEventListener("click", function () {
  this.classList.add("out");
  document.body.classList.remove("modal-active");
});
