const zap = document.getElementById("zap");
const zapPremire = document.getElementById("zapPremiere");
const zapManlogy = document.getElementById("zapManlogy");
const zapLoc = document.getElementById("zapLoc");
const zapPremireLoc = document.getElementById("zapPremierLoc");
const zapManlogyLoc = document.getElementById("zapManlogyLoc");

zap.addEventListener('click',()=> {
    zap.classList.remove('opacity-25')
    zapPremire.classList.add('opacity-25')
    zapManlogy.classList.add('opactiy-25')
    zapLoc.classList.remove('hidden')
    zapPremireLoc.classList.add('hidden')
    zapManlogyLoc.classList.add('hidden')
})

zapPremire.addEventListener('click',()=> {
    zap.classList.add('opacity-25')
    zapPremire.classList.remove('opacity-25')
    zapManlogy.classList.add('opactiy-25')
    zapLoc.classList.add('hidden')
    zapPremireLoc.classList.remove('hidden')
    zapManlogyLoc.classList.add('hidden')
})

zapManlogy.addEventListener('click',()=> {
    zap.classList.add('opacity-25')
    zapPremire.classList.add('opacity-25')
    zapManlogy.classList.remove('opactiy-25')
    zapLoc.classList.add('hidden')
    zapPremireLoc.classList.add('hidden')
    zapManlogyLoc.classList.remove('hidden')
})