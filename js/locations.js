const zap = document.getElementById("zap");
const zapPremire = document.getElementById("zapPremiere");
const zapManlogy = document.getElementById("zapManlogy");
const zapLoc = document.getElementById("zapLoc");
const zapPremireLoc = document.getElementById("zapPremierLoc");
const zapManlogyLoc = document.getElementById("zapManlogyLoc");

zap.addEventListener('click',()=> {
    zapLoc.classList.remove('hidden')
    zapPremireLoc.classList.add('hidden')
    zapManlogyLoc.classList.add('hidden')
})

zapPremire.addEventListener('click',()=> {
    zapLoc.classList.add('hidden')
    zapPremireLoc.classList.remove('hidden')
    zapManlogyLoc.classList.add('hidden')
})

zapManlogy.addEventListener('click',()=> {
    zapLoc.classList.add('hidden')
    zapPremireLoc.classList.add('hidden')
    zapManlogyLoc.classList.remove('hidden')
})