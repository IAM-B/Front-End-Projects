// Function generate virtual keyboard
const generateVirtualKeyboard = () => {
  const keyboardContainer = document.createElement("div");
  keyboardContainer.classList.add("keyboard");

  const keyboardRows = [
    ["ذ", "ّ", "َ", "ً", "ُ", "ٌ", "ِ", "ٍ", "ْ", "ٰ", "ۡ", "د"],
    ["ض", "ص", "ث", "ق", "ف", "غ", "أ", "ع", "ه", "خ", "ح", "ج"],
    ["ش", "س", "ي", "ب", "ل", "إ", "ا", "ت", "ن", "م", "ك", "ط"],
    ["ـ", "ئ", "ء", "ؤ", "ٱ", "ر", "لا", "ى", "ة", "و", "ز", "ظ"],
  ];

  keyboardRows.forEach((row) => {
    const keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard-row");

    row.forEach((key) => {
      const button = document.createElement("button");
      button.classList.add("keyboard-key");
      button.textContent = key;

      button.addEventListener("click", (event) => {
        const selectedInput = document.querySelector(".input-ayah.selected");
        if (selectedInput) {
          const currentValue = selectedInput.value;
          const currentCursorPosition = selectedInput.selectionStart;
          const textBeforeCursor = currentValue.substring(
            0,
            currentCursorPosition
          );
          const textAfterCursor = currentValue.substring(currentCursorPosition);
          const clickedKey = event.target.textContent;
          const updatedValue = textBeforeCursor + clickedKey + textAfterCursor;
          selectedInput.value = updatedValue;
          selectedInput.selectionStart = currentCursorPosition + 1;
          selectedInput.selectionEnd = currentCursorPosition + 1;
        }
      });

      keyboardRow.appendChild(button);
    });

    keyboardContainer.appendChild(keyboardRow);
  });

  const spaceDeleteRow = document.createElement("div");
  spaceDeleteRow.classList.add("keyboard-row");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("keyboard-key", "delete");
  deleteButton.innerHTML =
    "<span class='delete-icon'><i class='fas fa-chevron-right'></i></span>";
  deleteButton.addEventListener("click", () => {
    const selectedInput = document.querySelector(".input-ayah.selected");
    if (selectedInput) {
      const currentValue = selectedInput.value;
      const currentCursorPosition = selectedInput.selectionStart;
      const textBeforeCursor = currentValue.substring(
        0,
        currentCursorPosition - 1
      );
      const textAfterCursor = currentValue.substring(currentCursorPosition);
      selectedInput.value = textBeforeCursor + textAfterCursor;
      selectedInput.selectionStart = currentCursorPosition - 1;
      selectedInput.selectionEnd = currentCursorPosition - 1;
    }
  });
  spaceDeleteRow.appendChild(deleteButton);

  const spaceButton = document.createElement("button");
  spaceButton.classList.add("keyboard-key", "space");
  spaceButton.textContent = " ";
  spaceDeleteRow.appendChild(spaceButton);

  const leftButton = document.createElement("button");
  leftButton.classList.add("keyboard-key", "direction");
  leftButton.innerHTML = "<i class='fas fa-arrow-left'></i>";
  leftButton.addEventListener("click", () => {
    const selectedInput = document.querySelector(".input-ayah.selected");
    if (selectedInput) {
      const currentCursorPosition = selectedInput.selectionStart;
      if (currentCursorPosition < selectedInput.value.length) {
        selectedInput.selectionStart = currentCursorPosition + 1;
        selectedInput.selectionEnd = currentCursorPosition + 1;
      }
    }
  });
  spaceDeleteRow.appendChild(leftButton);

  const rightButton = document.createElement("button");
  rightButton.classList.add("keyboard-key", "direction");
  rightButton.innerHTML = "<i class='fas fa-arrow-right'></i>";
  rightButton.addEventListener("click", () => {
    const selectedInput = document.querySelector(".input-ayah.selected");
    if (selectedInput) {
      const currentCursorPosition = selectedInput.selectionStart;
      if (currentCursorPosition > 0) {
        selectedInput.selectionStart = currentCursorPosition - 1;
        selectedInput.selectionEnd = currentCursorPosition - 1;
      }
    }
  });
  spaceDeleteRow.appendChild(rightButton);

  keyboardContainer.appendChild(spaceDeleteRow);

  document.body.appendChild(keyboardContainer);
};

// Function attach keyboard events
const attachKeyboardEvents = (input) => {
  const keyboardKeys = document.querySelectorAll(".keyboard-key");
  const keyboard = document.querySelector(".keyboard");
  const footer = document.querySelector("footer");
  
  keyboardKeys.forEach((key) => {
    key.addEventListener("click", () => {
      const character = key.textContent;

      const selectedInput = document.querySelector(".input-ayah.selected");

      if (input === selectedInput) {
        selectedInput.value;
      }
    });

    key.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });
  });

  input.addEventListener("click", () => {
    const inputFields = document.querySelectorAll(".input-ayah");
    inputFields.forEach((i) => i.classList.remove("selected"));
    input.classList.add("selected");
  });

  input.addEventListener("focus", () => {
    const keyboard = document.querySelector(".keyboard");
    const footer = document.querySelector("footer");

    keyboard.classList.add("show");
    footer.classList.add("show");

    const inputLength = input.value.length;
    input.setSelectionRange(inputLength, inputLength);
  });

  input.addEventListener("blur", () => {
    const keyboard = document.querySelector(".keyboard");
    const footer = document.querySelector("footer");

    keyboard.classList.remove("show");
    footer.classList.remove("show");
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  });
};

// Mutation observer
const observer = new MutationObserver((mutationsList) => {
  mutationsList.forEach((mutation) => {
    if (mutation.type === "childList") {
      mutation.addedNodes.forEach((node) => {
        if (
          node.tagName === "INPUT" &&
          node.classList.contains("input-ayah") &&
          !node.closest(".input-ayah")
        ) {
          attachKeyboardEvents(node);
        }
      });
    }
  });
});

const config = {
  childList: true,
  subtree: true,
};

observer.observe(document, config);

generateVirtualKeyboard();
