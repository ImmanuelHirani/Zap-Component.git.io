const tambahKeranjang = document.getElementById('tambah-keranjang');
const beliSekarang = document.getElementById('beli-sekarang');
const addtoCart = document.getElementById('addtoCart');
const checkOut = document.getElementById('checkOut');
const closeCart = document.querySelectorAll('.closeCart');

tambahKeranjang.addEventListener('click', () => {
    // Menghapus kelas 'hidden' dari tombol '.addtoCart'
    addtoCart.classList.remove('hidden');
});

beliSekarang.addEventListener('click', () => {
    // Menghapus kelas 'hidden' dari tombol '.addtoCart'
    checkOut.classList.remove('hidden');
});

closeCart.forEach( (closeBtn) => {
  closeBtn.addEventListener('click', () => {
    // Menghapus kelas 'hidden' dari tombol '.addtoCart'
    checkOut.classList.add('hidden');
    addtoCart.classList.add('hidden');
});
});


