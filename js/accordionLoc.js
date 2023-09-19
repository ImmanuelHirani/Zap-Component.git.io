const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEventListener("click", event => {
        accordionHeaders.forEach(otherAccordionHeader => {
            if (otherAccordionHeader !== accordionHeader) {
                otherAccordionHeader.classList.remove("active");
                const otherAccordionBody = otherAccordionHeader.nextElementSibling;
                otherAccordionBody.style.maxHeight = 0;
            }
        });
        
        accordionHeader.classList.toggle("active");
        const accordionBody = accordionHeader.nextElementSibling;
        
        if (accordionHeader.classList.contains("active")) {
            accordionBody.style.maxHeight =  accordionBody.scrollHeight + "px";
        } else {
            accordionBody.style.maxHeight = 0;
        }
    });
});

// Fungsi untuk mengatur ketinggian maksimum elemen
function adjustMaxHeight() {
    const accordionBodies = document.querySelectorAll('.accordion-body');
    
    accordionBodies.forEach(accordionBody => {
        if (accordionBody.previousElementSibling.classList.contains('active')) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        }
    });
}

// Panggil fungsi adjustMaxHeight() dan tambahkan event listener resize
adjustMaxHeight();
window.addEventListener("resize", adjustMaxHeight);
