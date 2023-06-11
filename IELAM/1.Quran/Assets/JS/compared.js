function checkAnswers() {
  const inputContainers = document.querySelectorAll(
    "#mushaf-layout .input-container"
    );

  inputContainers.forEach((inputContainer, index) => {
    const inputChildren = Array.from(inputContainer.children);
    let userAnswers = [];
    let ayahNumSpans = [];
    let verseWords = [];

    const userAnswersDiv = document.createElement("div");
    userAnswersDiv.classList.add("user-answers");

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

    const verseContent = lineContentData[index + 2];
    let verseHTML = "";

    verseContent.forEach((element) => {
      const { text, ayahNum } = element;

      if (ayahNum) {
        const arabicNum = convertToArabicNumber(ayahNum);
        verseHTML += `<span class="ayah-num">${arabicNum} </span>`;
      } else if (text) {
        verseHTML += `<span class="ayah">${text} </span>`;
        verseWords.push(text);
      }
    });

    const verseWordArray = [verseWords.join(" ")];

    userAnswers.forEach((userAnswer, answerIndex) => {
      const answerWords = userAnswer.split(" ");
      const verseWordsArray = verseWordArray[0].split(" ");

      const isMatch = answerWords.every(
        (word, i) => word === verseWordsArray[i]
      );

      console.log(`User Answer: ${userAnswer}`);
      console.log(`Verse Words: ${verseWordArray}`);
      console.log(`Verse Word Index: ${answerWords.length}`);
      console.log(`User Answer Word Index: ${answerIndex}`);

      if (isMatch && answerWords.length === verseWordsArray.length) {
        console.log("Correct!");
        const correctSpan = document.createElement("span");
        correctSpan.classList.add("correct", "user-word");
        correctSpan.textContent = userAnswer + " ";
        userAnswersDiv.appendChild(correctSpan);
      } else {
        console.log("Incorrect!");
        const errorSpan = document.createElement("span");
        errorSpan.classList.add("error", "user-word");
        errorSpan.textContent = userAnswer + " ";
        userAnswersDiv.appendChild(errorSpan);
      }

      // Ajouter les spans des numéros d'ayah si nécessaire
      if (answerIndex < ayahNumSpans.length) {
        userAnswersDiv.appendChild(ayahNumSpans[answerIndex]);
      }
    });

    const isCorrect = userAnswers.every(
      (answer, index) => answer === verseWordArray[index]
    );
    if (isCorrect) {
      userAnswersDiv.classList.add("correct");
    } else {
      userAnswersDiv.classList.add("incorrect");
    }

    inputContainer.innerHTML = "";
    inputContainer.innerHTML = verseHTML;
    inputContainer.appendChild(userAnswersDiv);
  });
}