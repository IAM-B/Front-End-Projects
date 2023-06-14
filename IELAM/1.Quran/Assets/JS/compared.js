function checkAnswers() {
  const inputContainers = document.querySelectorAll(
    "#mushaf-layout .input-container"
    );

  inputContainers.forEach((inputContainer, index) => {
    const inputChildren = Array.from(inputContainer.children);
    let userAnswers = [];
    let ayahNumSpans = [];
    let ayahSpans = [];

    const ayahDiv = document.createElement("div");
    ayahDiv.classList.add("ayah");
    const verseWords = ayahDiv.querySelectorAll(".ayah");

    for (let i = 0; i < inputChildren.length; i++) {
      const input = inputChildren[i];
      const value = input.value.trim();

      if (input.classList.contains("ayah-num")) {
        const ayahNumSpan = document.createElement("span");
        ayahNumSpan.classList.add("ayah-num");
        ayahNumSpan.textContent = value + " ";
        ayahNumSpans.push(ayahNumSpan);
      } else {
        userAnswers.push(value);
        if (i + 1 < inputChildren.length) {
          const nextElement = inputChildren[i + 1];
          if (nextElement.classList.contains("ayah-num")) {
            const ayahNumValue = nextElement.textContent.trim();
            const ayahNumSpan = document.createElement("span");
            ayahNumSpan.classList.add("ayah-num");
            ayahNumSpan.textContent = ayahNumValue + " ";
            ayahNumSpans.push(ayahNumSpan);
            i++;
          }
        }
      }
    }

    const userAnswersDiv = document.createElement("div");
    userAnswersDiv.classList.add("user-answers");

    userAnswers.forEach((userAnswer, answerIndex) => {
      if (answerIndex < ayahNumSpans.length) {
        const userAnswerSpan = document.createElement("span");
        userAnswerSpan.classList.add("user-answer");
        userAnswerSpan.textContent = userAnswer + " ";
        userAnswersDiv.appendChild(userAnswerSpan);
        userAnswersDiv.appendChild(ayahNumSpans[answerIndex]);
      } else {
        const userAnswerSpan = document.createElement("span");
        userAnswerSpan.classList.add("user-answer");
        userAnswerSpan.textContent = userAnswer + " ";
        userAnswersDiv.appendChild(userAnswerSpan);
      }
    });

    const verseContent = lineContentData[index + 2];
    let verseHTML = "";

    verseContent.forEach((element) => {
      const { text, ayahNum } = element;

      if (ayahNum) {
        const arabicNum = convertToArabicNumber(ayahNum);
        verseHTML += `<span class="ayah-num">${arabicNum} </span>`;
      } else if (text) {
        verseHTML += `<span class="ayah">${text} </span>`;
        ayahSpans.push(text);
      }
    });

    ayahDiv.innerHTML = verseHTML;

    verseWords.forEach((wordElement) => {
      const word = wordElement.textContent;

      if (!userAnswers.includes(word)) {
        const errorWordSpan = document.createElement("span");
        errorWordSpan.classList.add("error");
        errorWordSpan.textContent = word + " ";
        ayahDiv.replaceChild(errorWordSpan, wordElement);
      } else {
        const correctWordSpan = document.createElement("span");
        correctWordSpan.classList.add("correct");
        correctWordSpan.textContent = word + " ";
        ayahDiv.replaceChild(correctWordSpan, wordElement);
      }
    });

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
      userWords.forEach((userWord) => {
        const matchingWord = verseWords.find(
          (verseWord) => verseWord === userWord
          );

        if (matchingWord) {
          const correctSpan = document.createElement("span");
          correctSpan.classList.add("correct");
          correctSpan.textContent = userWord + " ";
          userAnswersDiv.appendChild(correctSpan);
        } else {
          const errorSpan = document.createElement("span");
          errorSpan.classList.add("error");
          errorSpan.textContent = userWord + " ";
          userAnswersDiv.appendChild(errorSpan);
        }
      });

      userAnswersDiv.classList.add("incorrect");
    }

    inputContainer.innerHTML = "";
    inputContainer.appendChild(ayahDiv);
    inputContainer.appendChild(userAnswersDiv);
  });
};