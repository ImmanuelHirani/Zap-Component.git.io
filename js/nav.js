const navBurger = document.querySelector("#navBurger");
const Language = document.querySelector("#Language");
const Languagesm = document.querySelector("#Languagesm");
const LanguageBox = document.querySelector("#LanguageBox");
const LanguageBoxsm = document.querySelector("#LanguageBoxsm");
const navDropTreatment = document.querySelector("#navDropTreatment");
const navmenuTreatment = document.querySelector("#navmenuTreatment");
const btntreatmentSM = document.querySelector("#btn-treatmentSM");
const treatbtnlink = document.querySelector("#treatbtnlink");
const navexpand = document.querySelector("#navexpand");


navBurger.addEventListener("click", function () {
  navBurger.classList.toggle("navBurger-active");
});

Language.addEventListener("click", function () {
  Language.classList.toggle("Language-active");
  LanguageBox.classList.toggle("hidden");
});

navDropTreatment.addEventListener("click", function () {
  navDropTreatment.classList.toggle("navDropTreatment-active");
  navexpand.classList.toggle("navexpand-active");
  navmenuTreatment.classList.toggle("hidden");
});

// Offcanvas js sm
btntreatmentSM.addEventListener("click", function () {
  btntreatmentSM.classList.toggle("btntreatmentSM-active");
  treatbtnlink.classList.toggle("hidden");
});
// End

Languagesm.addEventListener("click", function () {
  Languagesm.classList.toggle("Language-active");
  LanguageBoxsm.classList.toggle("hidden");
});

function changeLanguage(lang) {
  const languageSpan = document.querySelector("#Language span");
  const checkENG = document.getElementById("checkENG");
  const checkID = document.getElementById("checkID");
  const languageBox = document.getElementById("LanguageBox");

  if (lang === "ENG") {
    languageSpan.innerHTML = `
      <img src="/public/temp-asset/statis-asset/English-Bahasa.png" alt="">
      <i class='bx bx-chevron-down text-2xl'></i>
    `;
    checkENG.innerHTML = `<i class='text-2xl bx bx-check'></i>`;
    checkID.innerHTML = `<i class='text-2xl bx'></i>`;
  } else if (lang === "ID") {
    languageSpan.innerHTML = `
      <img src="/public/temp-asset/statis-asset/Indo-Bahasa.png" alt="">
      <i class='bx bx-chevron-down text-2xl'></i>
    `;
    checkENG.innerHTML = `<i class='text-2xl bx'></i>`;
    checkID.innerHTML = `<i class='text-2xl bx bx-check'></i>`;
  }

  // Hide language dropdown
  languageBox.classList.add("hidden");
}
