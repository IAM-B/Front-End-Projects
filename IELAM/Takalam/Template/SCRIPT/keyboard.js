// Function generate virtual keyboard
const generateVirtualKeyboard = () => {
  const keyboardContainer = document.createElement("div");
  keyboardContainer.classList.add("keyboard");

  const keyboardRows = [
    ["آ", "ٰ", "َّ", "َ", "ً", "ُّ", "ُ", "ٌ", "ﱢ", "ﹺ", "ﹴ", "ْ"],
    ["ض", "ص", "ث", "ق", "ف", "غ", "أ", "ع", "ه", "خ", "ح", "ج"],
    ["ش", "س", "ي", "ب", "ل", "إ", "ا", "ت", "ن", "م", "ك", "ط"],
    ["ذ", "د", "ئ", "ء", "ؤ", "ٱ", "ر", "ى", "ة", "و", "ز", "ظ"],
  ];

  keyboardRows.forEach((row) => {
    const keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard-row");

    row.forEach((key) => {
      const button = document.createElement("button");
      button.classList.add("keyboard-key");
      button.textContent = key;
      button.setAttribute("translate", "no")

      button.addEventListener("click", (event) => {
        const selectedInput = document.querySelector(
          ".input-fill.selected"
        );
        if (selectedInput) {
          const currentValue = selectedInput.value;
          const currentCursorPosition = selectedInput.selectionStart;
          const textBeforeCursor = currentValue.substring(
            0,
            currentCursorPosition
          );
          const textAfterCursor = currentValue.substring(
            selectedInput.selectionEnd
          );
          const clickedKey = event.target.textContent;

          let updatedValue;
          let updatedCursorPosition;

          if (["َّ", "ُّ", "ِّ"].includes(clickedKey)) {
            updatedValue =
              textBeforeCursor + clickedKey + textAfterCursor;
            updatedCursorPosition = currentCursorPosition + 2;
          } else {
            updatedValue =
              textBeforeCursor + clickedKey + textAfterCursor;
            updatedCursorPosition = currentCursorPosition + 1;
          }

          selectedInput.setRangeText(
            clickedKey,
            selectedInput.selectionStart,
            selectedInput.selectionEnd,
            "end"
          );

          selectedInput.value = updatedValue;
          selectedInput.selectionStart = updatedCursorPosition;
          selectedInput.selectionEnd = updatedCursorPosition;
        }
      });

      keyboardRow.appendChild(button);
    });

    keyboardContainer.appendChild(keyboardRow);
  });

  const spaceRow = document.createElement("div");
  spaceRow.classList.add("keyboard-row");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("keyboard-key", "delete");
  deleteButton.setAttribute("translate", "no")
  deleteButton.innerHTML =
    "<span class='delete-icon'><i class='fas fa-chevron-right'></i></span>";
  deleteButton.addEventListener("click", () => {
    const selectedInput = document.querySelector(".input-fill.selected");

    if (selectedInput) {
      const currentValue = selectedInput.value;
      const currentCursorPosition = selectedInput.selectionStart;
      const textBeforeCursor = currentValue.substring(
        0,
        currentCursorPosition
      );
      const textAfterCursor = currentValue.substring(
        currentCursorPosition
      );
      const clickedKey = event.target.textContent;

      let updatedCursorPosition;

      if (
        textBeforeCursor.endsWith("\u0651\u064E") ||
        textBeforeCursor.endsWith("\u0651\u064F") ||
        textBeforeCursor.endsWith("\u0651\u0650")
      ) {
        const textBeforeCursorWithoutChedda = textBeforeCursor.slice(
          0,
          -2
        );
        updatedCursorPosition = currentCursorPosition - 2;
        selectedInput.value =
          textBeforeCursorWithoutChedda + clickedKey + textAfterCursor;
      } else {
        const textBeforeCursorWithoutLastCharacter =
          textBeforeCursor.slice(0, -1);
        selectedInput.value =
          textBeforeCursorWithoutLastCharacter +
          clickedKey +
          textAfterCursor;
        updatedCursorPosition = currentCursorPosition - 1;
      }

      selectedInput.selectionStart = updatedCursorPosition;
      selectedInput.selectionEnd = updatedCursorPosition;
    }
  });

  spaceRow.appendChild(deleteButton);

  const tatweelButton = document.createElement("button");
  tatweelButton.classList.add("keyboard-key", "tatweel");
  tatweelButton.setAttribute("translate", "no")
  tatweelButton.textContent = "ـ";
  spaceRow.appendChild(tatweelButton);

  tatweelButton.addEventListener("click", (event) => {
    const selectedInput = document.querySelector(".input-fill.selected");
    if (selectedInput) {
      const currentValue = selectedInput.value;
      const currentCursorPosition = selectedInput.selectionStart;
      const textBeforeCursor = currentValue.substring(
        0,
        currentCursorPosition
      );
      const textAfterCursor = currentValue.substring(
        currentCursorPosition
      );
      const clickedKey = event.target.textContent;

      let updatedValue;
      if (clickedKey === "ـ") {
        updatedValue = textBeforeCursor + "ـ" + textAfterCursor;
      } else {
        updatedValue = textBeforeCursor + clickedKey + textAfterCursor;
      }

      selectedInput.value = updatedValue;
      selectedInput.selectionStart = currentCursorPosition + 1;
      selectedInput.selectionEnd = currentCursorPosition + 1;
    }
  });

  const spaceButton = document.createElement("button");
  spaceButton.classList.add("keyboard-key", "space");
  spaceButton.setAttribute("translate", "no")
  spaceButton.textContent = " ";
  spaceRow.appendChild(spaceButton);

  spaceButton.addEventListener("click", (event) => {
    const selectedInput = document.querySelector(".input-fill.selected");
    if (selectedInput) {
      const currentValue = selectedInput.value;
      const currentCursorPosition = selectedInput.selectionStart;
      const textBeforeCursor = currentValue.substring(
        0,
        currentCursorPosition
      );
      const textAfterCursor = currentValue.substring(
        currentCursorPosition
      );
      const clickedKey = event.target.textContent;

      let updatedValue;
      if (clickedKey === " ") {
        updatedValue = textBeforeCursor + " " + textAfterCursor;
      } else {
        updatedValue = textBeforeCursor + clickedKey + textAfterCursor;
      }

      selectedInput.value = updatedValue;
      selectedInput.selectionStart = currentCursorPosition + 1;
      selectedInput.selectionEnd = currentCursorPosition + 1;
    }
  });

  const leftButton = document.createElement("button");
  leftButton.classList.add("keyboard-key", "direction");
  leftButton.setAttribute("translate", "no")
  leftButton.innerHTML = "<i class='fas fa-arrow-left'></i>";
  leftButton.addEventListener("click", () => {
    const selectedInput = document.querySelector(".input-fill.selected");
    if (selectedInput) {
      const currentCursorPosition = selectedInput.selectionStart;
      if (currentCursorPosition < selectedInput.value.length) {
        selectedInput.selectionStart = currentCursorPosition + 1;
        selectedInput.selectionEnd = currentCursorPosition + 1;
      }
    }
  });
  spaceRow.appendChild(leftButton);

  const rightButton = document.createElement("button");
  rightButton.classList.add("keyboard-key", "direction");
  rightButton.setAttribute("translate", "no")
  rightButton.innerHTML = "<i class='fas fa-arrow-right'></i>";
  rightButton.addEventListener("click", () => {
    const selectedInput = document.querySelector(".input-fill.selected");
    if (selectedInput) {
      const currentCursorPosition = selectedInput.selectionStart;
      if (currentCursorPosition > 0) {
        selectedInput.selectionStart = currentCursorPosition - 1;
        selectedInput.selectionEnd = currentCursorPosition - 1;
      }
    }
  });
  spaceRow.appendChild(rightButton);

  keyboardContainer.appendChild(spaceRow);

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

      const selectedInput = document.querySelector(
        ".input-fill.selected"
      );

      if (input === selectedInput) {
        selectedInput.value;
      }
    });

    key.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });
  });

  input.addEventListener("click", () => {
    const inputFields = document.querySelectorAll(".input-fill");
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
          node.classList.contains("input-fill") &&
          !node.closest(".input-fill")
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