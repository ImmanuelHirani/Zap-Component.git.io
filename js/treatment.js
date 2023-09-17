const treatmentbtn = document.querySelector('#treatmentBtn');
const optionTreatment = document.querySelector('#optionTreatment');

treatmentbtn.addEventListener('click', function() {
    treatmentbtn.classList.toggle('treatmentbtn-active');
    optionTreatment.classList.toggle('hidden');
});