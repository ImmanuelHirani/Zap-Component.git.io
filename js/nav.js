
document.addEventListener("DOMContentLoaded", function () {
// Navburger
const navBurger = document.getElementById("navbarBurger");
navBurger.addEventListener('click', () => {
    navBurger.classList.toggle('nav-active')
})
// Navburger End

// Language
const languages = document.querySelectorAll(".language");
const languageBoxes = document.querySelectorAll(".languageBox");
const languageSelector = document.querySelector(".language img"); // Menggunakan selektor yang benar untuk gambar bahasa
const defaultLanguageButton = document.querySelector(".languageBox button[data-lang='ID']"); // Menemukan tombol bahasa default (ID)

// Mengatur bahasa default (ID) tercentang
defaultLanguageButton.querySelector("svg").classList.toggle('opacity-100');

languages.forEach((language, index) => {
  language.addEventListener('click', () => {
    language.classList.toggle('language-Active');

    // Mengecek apakah languageBox terkait sudah aktif atau tidak
    const isActive = languageBoxes[index].classList.contains('languageBox-Active');

    // Menghapus kelas 'languageBox-Active' dari semua elemen languageBoxes
    languageBoxes.forEach(box => box.classList.remove('languageBox-Active'));

    // Jika languageBox terkait tidak aktif, maka aktifkan kembali
    if (!isActive) {
      languageBoxes[index].classList.add('languageBox-Active');
    }
  });
});

// Menambahkan event listener untuk setiap tombol di dalam languageBox
languageBoxes.forEach(languageBox => {
  const buttons = languageBox.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener('click', () => {


      // Mengambil teks tombol yang dipilih dari atribut data-lang
      const selectedText = button.getAttribute('data-lang');
      
      // Mengatur teks pada elemen .language
      languageSelector.src = `temp-asset/statis-asset/${selectedText}-Bahasa.png`;
      
      // Mengatur opacity untuk svg check
      buttons.forEach(btn => btn.querySelector("svg").classList.remove('opacity-100'));
      button.querySelector("svg").classList.add('opacity-100');

      // Menutup languageBox saat tombol dipilih
      languageBox.classList.remove('languageBox-Active');

      // Hapus 'language-Active' dari semua elemen language setelah tombol dipilih
      languages.forEach(lang => lang.classList.remove('language-Active'));
    });
  });
});

// Language End


const dropdownNavs = document.querySelectorAll('.dropdownNav');
const navContainerSm = document.querySelectorAll('.navSm');
const navContainer = document.querySelector('.navContainer');
const navExpandsbg = document.getElementById('navExpand');

let activeDropdownNav = null; // Variable to track the currently active element

// Function to close the active dropdown
function closeActiveDropdown() {
  if (activeDropdownNav) {
    activeDropdownNav.classList.remove('navDrop-Active');
    const activeDropMenuId = activeDropdownNav.getAttribute('data-drop-menu');
    const activeDropMenu = document.getElementById(activeDropMenuId);
    activeDropMenu.classList.remove('dropMenu-Active', 'opacity-0');
    navContainer.classList.remove('navExpands-Active');
    navExpandsbg.classList.remove("nav-Active")
    navExpandsbg.classList.add('nav-bg-Gradient');

    // Loop through navContainerSm elements and remove the class
    navContainerSm.forEach(element => {
      element.classList.remove('navsmExpands-Active');
    });

    activeDropdownNav = null;
  }
}

function activateDropdown(dropdownNav) {
  dropdownNav.classList.add('navDrop-Active');
  const dropMenuId = dropdownNav.getAttribute('data-drop-menu');
  const dropMenu = document.getElementById(dropMenuId);
  dropMenu.classList.add('dropMenu-Active');
  dropMenu.classList.remove('opacity-0');
  navContainer.classList.add('navExpands-Active');
  navExpandsbg.classList.add("nav-Active")
  navExpandsbg.classList.remove('nav-bg-Gradient');

  // Find the parent navSm and add the class
  const navSm = dropdownNav.closest('.navSm');
  if (navSm) {
    navSm.classList.add('navsmExpands-Active');
  }

  activeDropdownNav = dropdownNav;
}

dropdownNavs.forEach((dropdownNav) => {
  dropdownNav.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click event from reaching the document click event handler

    if (activeDropdownNav === dropdownNav) {
      // Clicked on the currently active element, close the dropdown
      closeActiveDropdown();
    } else {
      // Close the active dropdown if there is one
      closeActiveDropdown();

      // Activate the new dropdown
      activateDropdown(dropdownNav);
    }
  });
});

// Close the active dropdown when leaving the navContainer
navContainer.addEventListener('mouseleave', () => {
  closeActiveDropdown();
});

// Close the active dropdown for navContainerSm when clicking outside
document.addEventListener('click', () => {
  closeActiveDropdown();
});


// navCanvas

const mobileMenuButton = document.getElementById("navbarBurger");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("translate-x-0");
  mobileMenu.classList.toggle("-translate-x-full");
});


// navCanvas end





// Testing -----------------------------------------------------
// const dropdownNavs = document.querySelectorAll('.dropdownNav');
// const navContainer = document.querySelector('.navContainer');


// let activeDropdownNav = null; // Variabel untuk melacak elemen yang sedang aktif

// dropdownNavs.forEach((dropdownNav) => {
//   dropdownNav.addEventListener('click', () => {

//     if (activeDropdownNav === dropdownNav) {
//       // Klik pada elemen yang sedang aktif, nonaktifkan dropdown
//       dropdownNav.classList.remove('navDrop-Active');
//       const dropMenuId = dropdownNav.getAttribute('data-drop-menu');
//       const dropMenu = document.getElementById(dropMenuId);
//       dropMenu.classList.remove('dropMenu-Active');
//       dropMenu.classList.add('opacity-0');
//       navContainer.classList.remove('navExpands-Active');
//       activeDropdownNav = null;
//     } else {
//       if (activeDropdownNav) {
//         // Nonaktifkan dropdown sebelumnya
//         activeDropdownNav.classList.remove('navDrop-Active');
//         const activeDropMenuId = activeDropdownNav.getAttribute('data-drop-menu');
//         const activeDropMenu = document.getElementById(activeDropMenuId);
//         activeDropMenu.classList.remove('dropMenu-Active');
//         activeDropMenu.classList.add('opacity-0');
//       }

     
//       navContainer.addEventListener('mouseleave', () => {
//         dropdownNavs.forEach((dropdownNav) => {
//           dropdownNav.classList.remove('navDrop-Active');
//           const dropMenu = dropdownNav.nextElementSibling;
//           dropMenu.classList.remove('dropMenu-Active');
//           dropMenu.classList.add('opacity-0');
//         });
//         navContainer.classList.remove('navExpands-Active');
//       });
   

//       // Aktifkan dropdown yang baru
//       dropdownNav.classList.add('navDrop-Active');
//       const dropMenuId = dropdownNav.getAttribute('data-drop-menu');
//       const dropMenu = document.getElementById(dropMenuId);
//       dropMenu.classList.add('dropMenu-Active');
//       dropMenu.classList.remove('opacity-0');
//       navContainer.classList.add('navExpands-Active');
//       activeDropdownNav = dropdownNav;
//     }
//   });
// });




// -------------------------------------------------------------------------------------
// Hover
// const dropdownNavs = document.querySelectorAll('.dropdownNav');
// const navContainer = document.querySelector('.navContainer');

// let activeDropdownNav = null; // Variabel untuk melacak elemen yang sedang aktif

// dropdownNavs.forEach((dropdownNav) => {
//   dropdownNav.addEventListener('mouseenter', () => {
//     // Menambahkan event listener mouseenter
//     if (activeDropdownNav) {
//       // Hapus kelas aktif dari elemen yang sedang aktif sebelumnya
//       activeDropdownNav.classList.remove('navDrop-Active');
//       const activeDropMenuId = activeDropdownNav.getAttribute('data-drop-menu');
//       const activeDropMenu = document.getElementById(activeDropMenuId);
//       activeDropMenu.classList.remove('dropMenu-Active');
//       activeDropMenu.classList.add('opacity-0');
//     }

//     dropdownNav.classList.add('navDrop-Active');
//     const dropMenuId = dropdownNav.getAttribute('data-drop-menu');
//     const dropMenu = document.getElementById(dropMenuId);
//     dropMenu.classList.add('dropMenu-Active');
//     dropMenu.classList.remove('opacity-0');
//     navContainer.classList.add('navExpands-Active');

//     activeDropdownNav = dropdownNav; // Set elemen yang sedang aktif
//   });
// });

// navContainer.addEventListener('mouseleave', () => {
//   if (activeDropdownNav) {
//     activeDropdownNav.classList.remove('navDrop-Active');
//     const activeDropMenuId = activeDropdownNav.getAttribute('data-drop-menu');
//     const activeDropMenu = document.getElementById(activeDropMenuId);
//     activeDropMenu.classList.remove('dropMenu-Active');
//     activeDropMenu.classList.add('opacity-0');
//     activeDropdownNav = null; // Reset elemen yang sedang aktif
//   }
//   navContainer.classList.remove('navExpands-Active');
// });


// Hover End
// -------------------------------------------------------------------------------------

});

