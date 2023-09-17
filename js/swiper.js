// Homepage
let bannerSwiper = new Swiper(".hero-banner-content ", {
  grabCursor: true,
  loop:true,
  // If we need pagination
  pagination: {
    el: '#swiperBanner .banner-pagination',
    clickable: true
  },
  autoplay : {
      delay : 2500,
      disableOnInteraction: false,
  },
  // Navigation arrows
  breakpoints: {
    600: {
      slidesPerView: 1,
    },
    968: {
      slidesPerView: 1,
    },
  }
});

let TreatmentPilihanSwiper = new Swiper(".treatment-pilihan-content ", {
  slidesPerView: 1.2,
  spaceBetween:10,
  grabCursor: true,

  
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.treatment-button-next',
    prevEl: '.treatment-button-prev',
  },


  breakpoints: {
    600: {
      slidesPerView: 2.3,
    },
    968: {
      slidesPerView: 2.2,
    },
  }
});

let PromoSwiper = new Swiper(".promo-content ", {
  slidesPerView: 1.1,
  spaceBetween:10,
  grabCursor: true,  
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.promo-button-next',
    prevEl: '.promo-button-prev',
  },


// Breakpoint
  breakpoints: {
    600: {
      slidesPerView: 2.3,
    },
    968: {
      slidesPerView: 3.5,
    },
  }
});

let TestimonialSwiper = new Swiper(".testimonial-content ", {
  slidesPerView: 1.1,
  
  spaceBetween:20,
  grabCursor: true,
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.testi-button-next',
    prevEl: '.testi-button-prev',
  },

  breakpoints: {
    600: {
      slidesPerView: 2.3,
    },
    968: {
      slidesPerView: 3,
    },
  }
});
// Homepage End
