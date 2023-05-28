fetch("https://raw.githubusercontent.com/IAM-B/Frontend-Projects/main/IELAM/1.Quran/Assets/Words%20order/1.json")
  .then(response => response.json())
  .then(data => {
    const hizb = data.hizb;
    const juz = data.juz;
    const pageNumber = data.pageNumber;
    const surahs = data.surahs;

    const rowDiv = document.createElement('div');
    rowDiv.classList.add('mushaf-wrapper');
    rowDiv.id = 'page-' + `${pageNumber}`;

    const juzHizbPageDiv = document.createElement('div');
    juzHizbPageDiv.classList.add('row');
    const juzHizbSpan = document.createElement('span');
    juzHizbSpan.classList.add('juz-hizb');
    juzHizbSpan.textContent = `جزء ${juz}, حزب ${hizb}`;
    const pageNumberSpan = document.createElement('span');
    pageNumberSpan.classList.add('page-number');
    pageNumberSpan.textContent = `Page: ${pageNumber}`;
    juzHizbPageDiv.appendChild(pageNumberSpan);
    rowDiv.appendChild(juzHizbPageDiv);
    juzHizbPageDiv.appendChild(juzHizbSpan);


    surahs.forEach(surah => {
      const surahNumDiv = document.createElement('div');
      const surahNumSpan = document.createElement('span');
      surahNumSpan.textContent = `Surah Num: ${surah.surahNum}`;
      surahNumDiv.appendChild(surahNumSpan);
      rowDiv.appendChild(surahNumDiv);

      let lineDiv;
      let currentLineNumber = null;

      surah.ayahs.forEach(ayah => {
        const { ayahNum, words } = ayah;

        words.forEach(word => {
          const { text, lineNumber } = word;

          if (lineNumber !== currentLineNumber) {
            lineDiv = document.createElement('div');
            lineDiv.classList.add('line' + `${lineNumber}`, 'ayah-kalam');
            rowDiv.appendChild(lineDiv);
            currentLineNumber = lineNumber;
          }

          if (text !== null) {
            const textSpan = document.createElement('span');
            textSpan.classList.add('kalam');
            textSpan.textContent = " " + `${text}`;
            lineDiv.appendChild(textSpan);
          }
        });

        if (ayahNum !== null) {
          const ayahNumSpan = document.createElement('span');
          ayahNumSpan.classList.add('ayah-num');
          ayahNumSpan.textContent = " " + `${ayahNum}`;
          lineDiv.appendChild(ayahNumSpan);
        }
      });
    });

    const mushafLayoutDiv = document.getElementById('mushaf-layout');

    mushafLayoutDiv.innerHTML = '';

    mushafLayoutDiv.appendChild(rowDiv);
  })
  .catch(error => {
    console.log(error);
  });
