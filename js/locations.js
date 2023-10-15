function toggleElement(element, elements) {
    elements.forEach(el => el.classList.add('opacity-25'));
    element.classList.remove('opacity-25');
}

function toggleLocation(location, locations) {
    locations.forEach(loc => loc.classList.add('hidden'));
    location.classList.remove('hidden');
}

const zap = document.getElementById("zap");
const zapPremire = document.getElementById("zapPremiere");
const zapManlogy = document.getElementById("zapManlogy");
const zapLoc = document.getElementById("zapLoc");
const zapPremireLoc = document.getElementById("zapPremierLoc");
const zapManlogyLoc = document.getElementById("zapManlogyLoc");

zap.addEventListener('click', () => {
    toggleElement(zap, [zapPremire, zapManlogy]);
    toggleLocation(zapLoc, [zapPremireLoc, zapManlogyLoc]);
});

zapPremire.addEventListener('click', () => {
    toggleElement(zapPremire, [zap, zapManlogy]);
    toggleLocation(zapPremireLoc, [zapLoc, zapManlogyLoc]);
});

zapManlogy.addEventListener('click', () => {
    toggleElement(zapManlogy, [zap, zapPremire]);
    toggleLocation(zapManlogyLoc, [zapLoc, zapPremireLoc]);
});
