const btndropdown = document.querySelector('#btn-dropdown');
const dropmenu = document.querySelector('#drop-menu');

btndropdown.addEventListener('click', function() {
    btndropdown.classList.toggle('btndropdown-active');
    dropmenu.classList.toggle('menu-active');
    dropmenu.classList.toggle('hidden');
});

function selectItem(button) {
    // Menghapus kelas "active" dari semua tombol di dalam daftar
    const buttons = document.querySelectorAll('#btn-dropdown');
    buttons.forEach(btn => {
        btn.classList.remove('btndropdown-active');
    });

    // Menambahkan kelas "active" ke tombol yang diklik
    button.classList.add('btndropdown-active');

    // Mendapatkan kelas ikon dari tombol di atas
    const mainButtonIcon = document.querySelector('.relative #btn-dropdown i');
    
    // Mengganti teks pada tombol di atas dengan teks tombol yang diklik
    const mainButton = document.querySelector('.relative #btn-dropdown');
    mainButton.textContent = button.textContent;

    // Memasukkan kelas ikon kembali ke tombol di atas
    mainButton.appendChild(mainButtonIcon);

    // Menutup menu setelah item dipilih
    const dropmenu = document.querySelector('#drop-menu');
    dropmenu.classList.remove('menu-active');
    dropmenu.classList.add('hidden');
}
