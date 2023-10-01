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

Language.addEventListener("click", function () {
  Language.classList.toggle("Language-active");
  LanguageBox.classList.toggle("language-box-active");
});

Languagesm.addEventListener("click", function () {
  Languagesm.classList.toggle("Language-active");
  LanguageBoxsm.classList.toggle("hidden");
});


function changeLanguage(lang) {
  const languageImg = document.querySelector("#Language img");
  const checkENG = document.getElementById("checkENG");
  const checkID = document.getElementById("checkID");
  const languageBox = document.getElementById("LanguageBox");

  // Menghapus kelas "Language-active" dari semua tombol bahasa
  const languageButtons = document.querySelectorAll(".language-Wrapper button");
  languageButtons.forEach(button => {
    button.classList.remove("Language-active");
  });

  if (lang === "ENG") {
    languageImg.src = "temp-asset/statis-asset/English-Bahasa.png";
    checkENG.innerHTML = `<i class='text-2xl bx bx-check'></i>`;
    checkID.innerHTML = `<i class='text-2xl bx'></i>`;
  } else if (lang === "ID") {
    languageImg.src = "temp-asset/statis-asset/Indo-Bahasa.png";
    checkENG.innerHTML = `<i class='text-2xl bx'></i>`;
    checkID.innerHTML = `<i class='text-2xl bx bx-check'></i>`;
  }

  // Menambahkan kelas "Language-active" ke tombol yang diklik
  const selectedButton = document.querySelector(`.language-Wrapper button[data-lang='${lang}']`);
  selectedButton.classList.add("Language-active");

  // Hide language dropdown
  languageBox.classList.add("hidden");
}
