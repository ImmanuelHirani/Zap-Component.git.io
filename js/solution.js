const treatmentChoose = document.querySelectorAll(".treatment-choose");
const box = document.getElementById("box-choise-wrapper");
const myButtons = document.querySelectorAll('.myButton');
const findFitTreatmentButtons = document.getElementById('findfitTreatment'); // Corrected variable name
const treatmentFit = document.getElementById('treatmentFit');

findFitTreatmentButtons.addEventListener('click', () => {
  if (findFitTreatmentButtons.classList.contains('fit-treatment-tracker-Active')) {
    treatmentFit.classList.remove('hidden');
    // Gulirkan ke elemen treatmentFit
    treatmentFit.scrollIntoView({ behavior: 'smooth' });
  } else {
    treatmentFit.classList.add('hidden');
  }
});

let activeTreatmentChoose = null; // Variable to track the currently active element
let timeoutId = null; // Variable to store the timeout ID


// Function to close the active treatmentChoose and hide its content
function closeActiveTreatmentChoose() {
  if (activeTreatmentChoose) {
    activeTreatmentChoose.classList.remove('tc-active');
    box.classList.remove('box-active');
    const activeDropMenuId = activeTreatmentChoose.getAttribute('data-drop-Choose');
    const activeDropMenu = document.getElementById(activeDropMenuId);
    activeDropMenu.classList.add('hidden');
    activeTreatmentChoose = null;
  }
  // Clear the previous timeout
  clearTimeout(timeoutId);
}

function activateTreatmentChoose(othertreatment) {
  othertreatment.classList.add('tc-active');
  box.classList.add('box-active');
  activeTreatmentChoose = othertreatment;

  // Your added code to find the activeDropMenu
  const activeDropMenuId = othertreatment.getAttribute('data-drop-Choose');
  const activeDropMenu = document.getElementById(activeDropMenuId);

  // Remove 'btn-active' class from all buttons
  myButtons.forEach((mybtn) => {
    mybtn.classList.remove('btn-active');
  });

  findFitTreatmentButtons.classList.remove('fit-treatment-tracker-Active');

  // Show the content of the active treatmentChoose
  activeDropMenu.classList.remove('hidden');

  // Set a timeout to automatically close the active treatmentChoose after 2 minutes (120,000 milliseconds)
  timeoutId = setTimeout(() => {
    closeActiveTreatmentChoose();
  }, 120000); // 2 minutes
}

treatmentChoose.forEach((othertreatment) => {
  othertreatment.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click event from reaching the document click event handler

    if (activeTreatmentChoose === othertreatment) {
      // Clicked on the currently active element, close the treatmentChoose
      closeActiveTreatmentChoose();
    } else {
      // Close the active treatmentChoose if there is one
      closeActiveTreatmentChoose();

      // Activate the new treatmentChoose
      activateTreatmentChoose(othertreatment);
    }
  });
});


// My button : 
let anyButtonActive = false;

myButtons.forEach((mybtn) => {
  mybtn.addEventListener('click', () => {
    mybtn.classList.toggle('btn-active');

    if (mybtn.classList.contains('btn-active')) {
      anyButtonActive = true;
    } else {
      anyButtonActive = Array.from(myButtons).some((btn) => btn.classList.contains('btn-active'));
    }
    if (anyButtonActive) {
      findFitTreatmentButtons.classList.add('fit-treatment-tracker-Active'); // Corrected variable name
    } else {
      findFitTreatmentButtons.classList.remove('fit-treatment-tracker-Active'); // Corrected variable name
    }
  });
});
// My button End

