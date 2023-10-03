const dropdownNavs = document.querySelectorAll('.dropdownNav');
const navContainer = document.querySelector('.navContainer');

let activeDropdownNav = null; // Variabel untuk melacak elemen yang sedang aktif

dropdownNavs.forEach((dropdownNav) => {
  dropdownNav.addEventListener('mouseenter', () => {
    // Menambahkan event listener mouseenter
    if (activeDropdownNav) {
      // Hapus kelas aktif dari elemen yang sedang aktif sebelumnya
      activeDropdownNav.classList.remove('navDrop-Active');
      const activeDropMenuId = activeDropdownNav.getAttribute('data-drop-menu');
      const activeDropMenu = document.getElementById(activeDropMenuId);
      activeDropMenu.classList.remove('dropMenu-Active');
      activeDropMenu.classList.add('opacity-0');
    }

    dropdownNav.classList.add('navDrop-Active');
    const dropMenuId = dropdownNav.getAttribute('data-drop-menu');
    const dropMenu = document.getElementById(dropMenuId);
    dropMenu.classList.add('dropMenu-Active');
    dropMenu.classList.remove('opacity-0');
    navContainer.classList.add('navExpands-Active');

    activeDropdownNav = dropdownNav; // Set elemen yang sedang aktif
  });
});

navContainer.addEventListener('mouseleave', () => {
  if (activeDropdownNav) {
    activeDropdownNav.classList.remove('navDrop-Active');
    const activeDropMenuId = activeDropdownNav.getAttribute('data-drop-menu');
    const activeDropMenu = document.getElementById(activeDropMenuId);
    activeDropMenu.classList.remove('dropMenu-Active');
    activeDropMenu.classList.add('opacity-0');
    activeDropdownNav = null; // Reset elemen yang sedang aktif
  }
  navContainer.classList.remove('navExpands-Active');
});



// Menambahkan event listener mouseleave pada navContainer
// navContainer.addEventListener('mouseleave', (e) => {
//     // Mendapatkan posisi mouse saat mouseleave terjadi
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;

//     // Mendapatkan posisi dan ukuran dari dropMenu
//     const dropMenuRect = dropMenu.getBoundingClientRect();

//     // Memeriksa apakah mouse berada di luar dropMenu
//     if (
//         mouseX < dropMenuRect.left ||
//         mouseX > dropMenuRect.right ||
//         mouseY < dropMenuRect.top ||
//         mouseY > dropMenuRect.bottom
//     ) {
//         // Mouse berada di luar dropMenu, menghilangkan kelas aktif
//         dropdownNavs.classList.remove('navDrop-Active');
//         dropMenu.classList.remove('dropMenu-Active');
//         dropMenu.classList.add('opacity-0');
//         navContainer.classList.remove('navExpands-Active');
//     }
// });
