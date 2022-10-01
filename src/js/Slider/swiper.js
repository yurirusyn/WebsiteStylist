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
    1280: { slidesPerView: 2 },
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
