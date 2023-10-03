const treatmentChoose = document.querySelectorAll(".treatment-choose");
const box = document.querySelector(".box-choise-wrapper");
const myButtons = document.querySelectorAll('.myButton');
const findFitTreatmentButtons = document.querySelector('.find-fit-treatment');
const treatmentFit = document.querySelectorAll('.treatment-fit');

treatmentChoose.forEach((othertreatment) => {
  othertreatment.addEventListener('click', () => {
    // Periksa apakah elemen yang diklik memiliki kelas 'tc-active'
    if (othertreatment.classList.contains('tc-active')) {
      othertreatment.classList.remove('tc-active');
    } else {
      // Hapus kelas 'tc-active' dari semua elemen dalam treatmentChoose
      treatmentChoose.forEach((element) => {
        element.classList.remove('tc-active');
      });
      othertreatment.classList.add('tc-active');
    }

    // Periksa apakah setidaknya satu elemen dalam treatmentChoose memiliki kelas 'tc-active'
    if (document.querySelector('.treatment-choose.tc-active')) {
      box.classList.add('box-active');
    } else {
      box.classList.remove('box-active');
    }
  });
});
