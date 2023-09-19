const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
    const header = item.querySelector('.accordion-header'); // Ganti .toggle dengan .accordion-header
    const toggle = item.querySelector('.toggle');
    const line = item.querySelector('.line');

    header.addEventListener('click', () => { // Ganti 'item' menjadi 'header'
        items.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('open');
                otherItem.querySelector('.toggle').classList.add('hidden');
                otherItem.querySelector('.line').classList.remove('hidden');
            }
        });

        item.classList.toggle('open');
        toggle.classList.toggle('hidden');
        line.classList.toggle('hidden');

        const body = item.querySelector('.accordion-body');
        if (item.classList.contains('open')) {
            body.style.maxHeight = body.scrollHeight + "px";
        } else {
            body.style.maxHeight = 0;
        }
    });
});

// Fungsi untuk mengatur ketinggian maksimum elemen
function adjustMaxHeight() {
    const openItem = document.querySelector('.accordion-item.open');
    if (openItem) {
        const body = openItem.querySelector('.accordion-body');
        body.style.maxHeight = body.scrollHeight + "px";
    }
}

// Panggil fungsi adjustMaxHeight() dan tambahkan event listener resize
adjustMaxHeight();
window.addEventListener("resize", adjustMaxHeight);
