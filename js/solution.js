const beautybtn = document.querySelector('#beautyBtn');
const bodyBtn = document.querySelector('#bodyBtn');
const hairBtn = document.querySelector('#hairBtn');
const dripshealtBtn = document.querySelector('#dripsHealtBtn');
const optionBeauty = document.querySelector('#beautyChoose');
const optionBody = document.querySelector('#optionChooseBody');
const btnActive = document.querySelector('#btnSolutionfit');
const SolutionFit = document.querySelector('#SolutionFit');

let activeCategory = null; // Menyimpan kategori aktif saat ini

beautybtn.addEventListener('click', function() {
    if (activeCategory === 'beauty') {
        optionBeauty.classList.toggle('hidden');
    } else {
        optionBeauty.classList.remove('hidden');
        optionBody.classList.add('hidden');
        activeCategory = 'beauty';
    }
});

bodyBtn.addEventListener('click', function() {
    if (activeCategory === 'body') {
        optionBody.classList.toggle('hidden');
    } else {
        optionBody.classList.remove('hidden');
        optionBeauty.classList.add('hidden');
        activeCategory = 'body';
    }
});

hairBtn.addEventListener('click', function() {
    optionBeauty.classList.remove('hidden');
    optionBody.classList.add('hidden');
    activeCategory = 'beauty';
});

dripshealtBtn.addEventListener('click', function() {
    optionBeauty.classList.remove('hidden');
    optionBody.classList.add('hidden');
    activeCategory = 'beauty';
});

btnActive.addEventListener('click', function() {
    btnActive.classList.toggle('BtnFit-active');
    SolutionFit.classList.toggle('hidden');
});
