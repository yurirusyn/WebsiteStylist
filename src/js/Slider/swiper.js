let tabStyleNext = '.arrow__right';
let tabStylePrev = '.arrow__left';

let nav;

const swiper = new Swiper('.mySwiper', {
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
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    768: {
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
  mousewheel: true,
  keyboard: true,
});

const modalSlider = new Swiper('.modal-swiper', {
  cssMode: true,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  pagination: {
    el: '.pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});
