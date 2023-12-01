        
        // Вкладки
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabItems = document.querySelectorAll('.tab-item');
        
        tabButtons.forEach(button => {
          button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');
        
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabItems.forEach(item => item.classList.remove('active'));
        
            button.classList.add('active');
            document.getElementById(tab).classList.add('active');
          });
        });

        //Показать темы 
        const readMoreBtn = document.getElementById('readMoreBtn');
        const moreText = document.getElementById('moreText');
        
        readMoreBtn.addEventListener('click', function() {
          moreText.classList.toggle('hidden');
          if (moreText.classList.contains('hidden')) {
            readMoreBtn.textContent = 'Показать темы';
          } else {
            readMoreBtn.textContent = 'Скрыть';
          }
        });

        const readMoreBtnd = document.getElementById('readMoreBtnd');
        const moreTextd = document.getElementById('moreTextd');
        
        readMoreBtnd.addEventListener('click', function() {
          moreTextd.classList.toggle('hiddend');
          if (moreTextd.classList.contains('hiddend')) {
            readMoreBtnd.textContent = 'Показать темы';
          } else {
            readMoreBtnd.textContent = 'Скрыть';
          }
        });

        const readMoreBtne = document.getElementById('readMoreBtne');
        const moreTexte = document.getElementById('moreTexte');
        
        readMoreBtne.addEventListener('click', function() {
          moreTexte.classList.toggle('hiddene');
          if (moreTexte.classList.contains('hiddene')) {
            readMoreBtne.textContent = 'Показать темы';
          } else {
            readMoreBtne.textContent = 'Скрыть';
          }
        });

        const readMoreBtnr = document.getElementById('readMoreBtnr');
        const moreTextr = document.getElementById('moreTextr');
        
        readMoreBtnr.addEventListener('click', function() {
          moreTextr.classList.toggle('hiddenr');
          if (moreTextr.classList.contains('hiddenr')) {
            readMoreBtnr.textContent = 'Показать темы';
          } else {
            readMoreBtnr.textContent = 'Скрыть';
          }
        });

        const readMoreBtnf = document.getElementById('readMoreBtnf');
        const moreTextf = document.getElementById('moreTextf');
        
        readMoreBtnf.addEventListener('click', function() {
          moreTextf.classList.toggle('hiddenf');
          if (moreTextf.classList.contains('hiddenf')) {
            readMoreBtnf.textContent = 'Показать темы';
          } else {
            readMoreBtnf.textContent = 'Скрыть';
          }
        });

        
        const readMoreBtng = document.getElementById('readMoreBtng');
        const moreTextg = document.getElementById('moreTextg');
        
        readMoreBtng.addEventListener('click', function() {
          moreTextg.classList.toggle('hiddeng');
          if (moreTextg.classList.contains('hiddeng')) {
            readMoreBtng.textContent = 'Показать темы';
          } else {
            readMoreBtng.textContent = 'Скрыть';
          }
        });

        const readMoreBtnh = document.getElementById('readMoreBtnh');
        const moreTexth = document.getElementById('moreTexth');
        
        readMoreBtnh.addEventListener('click', function() {
          moreTexth.classList.toggle('hiddenh');
          if (moreTexth.classList.contains('hiddenh')) {
            readMoreBtnh.textContent = 'Показать темы';
          } else {
            readMoreBtnh.textContent = 'Скрыть';
          }
        });      

        const readMoreBtnj = document.getElementById('readMoreBtnj');
        const moreTextj = document.getElementById('moreTextj');
        
        readMoreBtnj.addEventListener('click', function() {
          moreTextj.classList.toggle('hiddenj');
          if (moreTextj.classList.contains('hiddenj')) {
            readMoreBtnj.textContent = 'Показать темы';
          } else {
            readMoreBtnj.textContent = 'Скрыть';
          }
        });

        

 const readMoreBtnk = document.getElementById('readMoreBtnk');
 const moreTextk = document.getElementById('moreTextk');
 
 readMoreBtnk.addEventListener('click', function() {
   moreTextk.classList.toggle('hiddenk');
   if (moreTextk.classList.contains('hiddenk')) {
     readMoreBtnk.textContent = 'Показать темы';
   } else {
     readMoreBtnk.textContent = 'Скрыть';
   }
 });

 