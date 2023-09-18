const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
    const toggle = item.querySelector('.toggle');
    const line = item.querySelector('.line');

    item.addEventListener('click', () => {
        // Cari item yang sedang terbuka
        const openItem = document.querySelector('.accordion-item.open');
        
        if (openItem && openItem !== item) {
            // Tutup item yang sedang terbuka
            openItem.classList.remove('open');
            openItem.querySelector('.toggle').classList.add('hidden');
            openItem.querySelector('.line').classList.remove('hidden');
        }
        
        // Buka atau tutup item saat ini
        item.classList.toggle('open');
        toggle.classList.toggle('hidden');
        line.classList.toggle('hidden');
    });
});
