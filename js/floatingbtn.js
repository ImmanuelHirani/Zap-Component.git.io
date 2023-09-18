const floatingbtn = document.querySelector('#back2top');
const chatbtn = document.querySelector('#chat');
const closebtn = document.querySelector('#close');
const chatabtnactive1 = document.querySelector('#chat-active1');
const chatabtnactive2 = document.querySelector('#chat-active2');

chatbtn.addEventListener('click', function() {
    chatbtn.classList.toggle('hidden');
    closebtn.classList.toggle('hidden');
    floatingbtn.classList.toggle('hidden');
    chatabtnactive1.classList.remove('hidden');
    chatabtnactive1.classList.add('chatbtn-active');
    chatabtnactive2.classList.remove('hidden');
    chatabtnactive2.classList.add('chatbtn-active');
});

closebtn.addEventListener('click', function() {
    chatbtn.classList.toggle('hidden');
    closebtn.classList.toggle('hidden');
    floatingbtn.classList.toggle('hidden');
    chatabtnactive1.classList.add('hidden');
    chatabtnactive1.classList.remove('chatbtn-active');
    chatabtnactive2.classList.add('hidden');
    chatabtnactive2.classList.remove('chatbtn-active');
});


floatingbtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  
});

