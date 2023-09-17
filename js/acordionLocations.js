const accordionHeaders = document.querySelectorAll('.accordion-header');

function toggleAccordion(accordionHeader) {
    const accordionBody = accordionHeader.nextElementSibling;
    
    if (accordionHeader.classList.contains("active")) {
        // Tutup accordion yang diklik
        accordionHeader.classList.remove("active");
        accordionBody.style.maxHeight = 0;
    } else {
        // Buka accordion yang diklik
        accordionHeader.classList.add("active");
        accordionBody.style.maxHeight =  accordionBody.scrollHeight + "px";
    }
}

function enableAccordionOnMobile() {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    function handleAccordion(e) {
        if (e.matches) {
            accordionHeaders.forEach(accordionHeader => {
                accordionHeader.addEventListener("click", event => {
                    toggleAccordion(accordionHeader);
                });
            });
        } else {
            accordionHeaders.forEach(accordionHeader => {
                accordionHeader.removeEventListener("click", toggleAccordion);
                // Reset accordion body heights
                const accordionBody = accordionHeader.nextElementSibling;
                accordionBody.style.maxHeight = "none";
            });
        }
    }

    // Initial setup
    handleAccordion(mediaQuery);

}

// Initial setup
enableAccordionOnMobile();
