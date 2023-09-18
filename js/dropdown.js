const treatmentbtndropdown = document.querySelector('#treatment-btn-dropdown');
const treatmentmenu = document.querySelector('#treatment-menu');

treatmentbtndropdown.addEventListener('click', function() {
    treatmentbtndropdown.classList.toggle('treatmentbtndropdown-active');
    treatmentmenu.classList.toggle('menu-active');
    treatmentmenu.classList.toggle('hidden');
});

function selectItem(button) {
    // Menghapus kelas "active" dari semua tombol di dalam daftar
    const buttons = document.querySelectorAll('#treatment-btn-dropdown');
    buttons.forEach(btn => {
        btn.classList.remove('treatmentbtndropdown-active');
    });

    // Menambahkan kelas "active" ke tombol yang diklik
    button.classList.add('treatmentbtndropdown-active');

    // Mendapatkan kelas ikon dari tombol di atas
    const mainButtonIcon = document.querySelector('.relative #treatment-btn-dropdown i');
    
    // Mengganti teks pada tombol di atas dengan teks tombol yang diklik
    const mainButton = document.querySelector('.relative #treatment-btn-dropdown');
    mainButton.textContent = button.textContent;

    // Memasukkan kelas ikon kembali ke tombol di atas
    mainButton.appendChild(mainButtonIcon);

    // Menutup menu setelah item dipilih
    const treatmentmenu = document.querySelector('#treatment-menu');
    treatmentmenu.classList.remove('menu-active');
    treatmentmenu.classList.add('hidden');
}
