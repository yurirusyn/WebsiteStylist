let mainPageSlider = new Swiper('.mySwiper', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
      },
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
      },
    },
    1280: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
      },
    },
  },
  keyboard: true,
});

let modalSlider = new Swiper('.modal-swiper', {
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  pagination: {
    el: '.pagination',
    clickable: true,
  },
  keyboard: true,
});

// mainPageSlider.controller.control = modalSlider;
// modalSlider.controller.control = mainPageSlider;
