const backToTop = document.getElementById('backToTop');
const liveChat = document.getElementById('liveChat');
const liveChatBox = document.getElementById('liveChatBox');
const whatsApp = document.getElementById('Whatsapp');
const closeBtn = document.getElementById('CloseBtn');
const closeBtnLiveChat = document.getElementById('CloseBtnlivechat'); // Perbaikan di sini
const openBtn = document.getElementById('chatBtnOpen');

openBtn.addEventListener('click', () => {
    openBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
    backToTop.classList.add('hidden');
    whatsApp.classList.remove('hidden');
    liveChat.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    openBtn.classList.remove('hidden');
    closeBtn.classList.add('hidden');
    backToTop.classList.remove('hidden');
    whatsApp.classList.add('hidden');
    liveChat.classList.add('hidden');
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});

liveChat.addEventListener('click', () => {
    liveChatBox.classList.remove('hidden');
    openBtn.classList.add('hidden');
    closeBtn.classList.add('hidden');
    backToTop.classList.add('hidden');
    whatsApp.classList.add('hidden');
    liveChat.classList.add('hidden');
});

closeBtnLiveChat.addEventListener('click', () => {
    liveChatBox.classList.add('hidden');
    closeBtn.classList.remove('hidden');
    whatsApp.classList.remove('hidden');
    liveChat.classList.remove('hidden');
});
