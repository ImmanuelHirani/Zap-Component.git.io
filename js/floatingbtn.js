const backToTop = document.getElementById('backToTop');
const liveChat = document.getElementById('liveChat');
const whatsApp = document.getElementById('Whatsapp');
const closeBtn = document.getElementById('CloseBtn');
const openBtn = document.getElementById('chatBtnOpen');

openBtn.addEventListener('click', () => {
    openBtn.classList.add('hidden')
    closeBtn.classList.remove('hidden')
    backToTop.classList.add('hidden')
    whatsApp.classList.remove('hidden')
    liveChat.classList.remove('hidden')
    // if (!openBtn.classList.contains('hidden')) {
    //     openBtn.classList.add('hidden');
    //     closeBtn.classList.remove('hidden');
    // } else {
    //     openBtn.classList.remove('hidden');
    //     closeBtn.classList.add('hidden');
    // }
});

closeBtn.addEventListener('click' , ()=> {
    openBtn.classList.remove('hidden')
    closeBtn.classList.add('hidden')
    backToTop.classList.remove('hidden')
    whatsApp.classList.add('hidden')
    liveChat.classList.add('hidden')
})



backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  
});

