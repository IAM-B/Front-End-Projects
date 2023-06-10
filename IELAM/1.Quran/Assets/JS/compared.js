const checkAnswers = () => {
  const inputContainers = document.querySelectorAll(
    "#mushaf-layout .input-container"
  );

  inputContainers.forEach((inputContainer, index) => {
    const inputChildren = Array.from(inputContainer.children);
    let userAnswers = [];

    for (let i = 0; i < inputChildren.length; i++) {
      const input = inputChildren[i];
      const value = input.value.trim();

      if (input.classList.contains("ayah-num")) {
        userAnswers.push(value);
      } else {
        userAnswers = userAnswers.concat(value.split(" "));
        if (i + 1 < inputChildren.length) {
          const nextElement = inputChildren[i + 1];
          if (nextElement.classList.contains("ayah-num")) {
            const ayahNumValue = nextElement.textContent.trim();
            userAnswers.push(ayahNumValue);
            i++;
          }
        }
      }
    }

    const verseContent = lineContentData[index + 2];
    let verseHTML = "";

    verseContent.forEach((element) => {
      const { text, ayahNum } = element;

      if (ayahNum) {
        const arabicNum = convertToArabicNumber(ayahNum);
        verseHTML += `<span class="ayah-num">${arabicNum} </span>`;
      } else {
        verseHTML += `<span class="ayah">${text} </span>`;
      }
    });

    const ayahDiv = document.createElement("div");
    ayahDiv.classList.add("ayah");
    ayahDiv.innerHTML = verseHTML;

    const verseWords = ayahDiv.querySelectorAll(".ayah");

    verseWords.forEach((wordElement) => {
      const word = wordElement.textContent;
      const wordWrapperDiv = document.createElement("div");
      wordWrapperDiv.classList.add("kalam-wrapper");

      if (!userAnswers.includes(word)) {
        const errorWordSpan = document.createElement("span");
        errorWordSpan.classList.add("error");
        errorWordSpan.textContent = word + " ";
        wordWrapperDiv.appendChild(errorWordSpan);
      } else {
        const correctWordSpan = document.createElement("span");
        correctWordSpan.classList.add("correct");
        correctWordSpan.textContent = word + " ";
        wordWrapperDiv.appendChild(correctWordSpan);
      }

      ayahDiv.replaceChild(wordWrapperDiv, wordElement);
    });

    const userAnswersDiv = document.createElement("div");
    userAnswersDiv.classList.add("user-answers");
    if (userAnswers.join(" ") === ayahDiv.textContent.trim()) {
      userAnswersDiv.classList.add("correct");
      const errorWords = ayahDiv.querySelectorAll(".error");
      errorWords.forEach((errorWord) => {
        errorWord.classList.remove("error");
        errorWord.classList.add("correct");
      });
    } else {
      const userWords = userAnswers.join(" ").split(" ");
      const verseWords = ayahDiv.textContent.trim().split(" ");
      userWords.forEach((userWord, wordIndex) => {
        const userKalamDiv = document.createElement("div");
        userKalamDiv.classList.add("kalam-wrapper");

        const matchingWord = verseWords.find(
          (verseWord) => verseWord === userWord
        );

        if (matchingWord) {
          const correctSpan = document.createElement("span");
          correctSpan.classList.add("correct");
          correctSpan.textContent = userWord + " ";
          userKalamDiv.appendChild(correctSpan);
        } else {
          const errorSpan = document.createElement("span");
          errorSpan.classList.add("error");
          errorSpan.textContent = userWord + " ";
          userKalamDiv.appendChild(errorSpan);
        }

        userAnswersDiv.appendChild(userKalamDiv);
      });

      userAnswersDiv.classList.add("incorrect");
    }

    inputContainer.innerHTML = "";
    inputContainer.appendChild(ayahDiv);
    inputContainer.appendChild(userAnswersDiv);
  });
};
