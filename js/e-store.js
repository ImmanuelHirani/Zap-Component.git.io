const dropmenuEstore = document.querySelector('#dropmenuEstore');
const optionTMenuDrop = document.querySelector('.navlink-dropmenu');

dropmenuEstore.addEventListener('click', function() {
    dropmenuEstore.classList.toggle('dropmenuEstore-active');
    optionTMenuDrop.classList.toggle('hidden');
});