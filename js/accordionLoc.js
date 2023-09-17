const accordionHeaders = document.querySelectorAll('.accordion-header');

function toggleAccordion(accordionHeader) {
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
}

function adjustMaxHeight() {
    const accordionBodies = document.querySelectorAll('.accordion-body');

    accordionBodies.forEach(accordionBody => {
        if (accordionBody.previousElementSibling.classList.contains('active')) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        } else {
            accordionBody.style.maxHeight = "0";
        }
    });
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
    mediaQuery.addListener(handleAccordion);
}

// Initial setup
adjustMaxHeight();
enableAccordionOnMobile();
