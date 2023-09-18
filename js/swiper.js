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


  // Tentang Zap Section Proud being Zap
  let proudSwipper = new Swiper(".card-content-proud", {
    spaceBetween: 12,
    grabCursor: true,
    slidesPerView : 2,
    // If we need pagination
    pagination: {
     
      clickable: true,
      dynamicBullets: true,
    },
    autoplay : {
      delay : 4000,
      disableOnInteraction: false,
  },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView:2 ,
      },
      1024: {
        slidesPerView: 4,
      },
    }
  });


  // Estore
    
  let EStoreBannerSwiper = new Swiper(".banner-content", {
    loop:true,
    grabCursor: true,

    autoplay : {
      delay : 4000,
      disableOnInteraction: false,
  },
    // If we need pagination
    // Navigation arrows
    
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
      },
      968: {
        slidesPerView:'1',
      },
    }
  });

  let EstoresliderSwiper = new Swiper(".Estoreslider-content ", {
    slidesPerView: 2,
    
    spaceBetween:10,
    grabCursor: true,
    // If we need pagination
  
    // Navigation arrows
    navigation: {
      nextEl: '.estore-button-next',
      prevEl: '.estore-button-prev',
    },
  
    breakpoints: {
      600: {
        slidesPerView: 2.3,
        spaceBetween:20,
      },
      968: {
        slidesPerView: 3,
        spaceBetween:20,
      },
    }
  });
  
  // Estore end
