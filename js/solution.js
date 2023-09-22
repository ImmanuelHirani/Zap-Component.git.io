const treatmentChoose = document.querySelectorAll(".treatment-choose");
const box = document.querySelectorAll(".box-choise-wrapper");
const myButtons = document.querySelectorAll('.myButton');
const findFitTreatmentButtons = document.querySelectorAll('.find-fit-treatment');
const treatmentFit = document.querySelectorAll('.treatment-fit');

treatmentChoose.forEach((treatmentChooseBTN) => {
  treatmentChooseBTN.addEventListener("click", () => {
    // Menghapus kelas aktif dari semua elemen treatmentChoose
    treatmentChoose.forEach((trBtn) => {
      if (trBtn !== treatmentChooseBTN) {
        trBtn.classList.remove("treatment-active");
      }
    });

    // Menghapus kelas hidden dan menambahkan kelas box-Active pada semua box
    box.forEach((boxItem) => {
      boxItem.classList.remove("hidden");
      boxItem.classList.add("box-Active");

      // Secara eksplisit mengatur max-height saat menghapus kelas hidden
      boxItem.style.maxHeight = boxItem.scrollHeight + "px";
    });

    // Toggle class pada elemen yang diklik
    treatmentChooseBTN.classList.toggle("treatment-active");

    // Cek apakah ada elemen treatment-choose yang aktif
    const isActive = Array.from(treatmentChoose).some((trBtn) =>
      trBtn.classList.contains("treatment-active")
    );

    // Jika tidak ada elemen yang aktif, tambahkan kembali kelas hidden pada semua box
    if (!isActive) {
      box.forEach((boxItem) => {
        boxItem.classList.add("hidden");
        boxItem.style.maxHeight = "0";
      });
    }
  });
});


myButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Toggle class on the clicked button
    button.classList.toggle('button-choose-active');
    
    // Check if any of the myButton elements have the 'button-choose-active' class
    const isActive = Array.from(myButtons).some((btn) => btn.classList.contains('button-choose-active'));

    // Enable or disable all find-fit-treatment buttons based on the isActive variable
    findFitTreatmentButtons.forEach((findFitTreatmentButton) => {
      if (isActive) {
        findFitTreatmentButton.removeAttribute('disabled');
        findFitTreatmentButton.classList.add('button-fit-treatment-active'); // Use 'classList.add' to add a class
      } else {
        findFitTreatmentButton.setAttribute('disabled', 'disabled');
        findFitTreatmentButton.classList.remove('button-fit-treatment-active'); // Use 'classList.remove' to remove a class
      }
    });
  });
});

findFitTreatmentButtons.forEach((button) => {
    button.addEventListener('click',() => {
        button.classList.toggle('fit-treatment-active')

        const isActive = Array.from(findFitTreatmentButtons).some((btn) => btn.classList.contains('fit-treatment-active'));

        treatmentFit.forEach((button)=> {
            if(isActive) {
                button.classList.remove('hidden');
            } else {
                button.classList.add('hidden')
            }
        })


    })
})