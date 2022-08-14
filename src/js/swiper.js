const arrow = document.getElementsByClassName('swiper-button-prev')[0];
console.log('arrow :>> ', arrow);
arrow.style.display = 'none';

const swiper = new Swiper('.mySwiper', {
  initialSlide: 1,
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    slideChange: function () {
      const arrow = document.getElementsByClassName('swiper-button-prev')[0];
      arrow.style.display = 'none';

      const activeIndex = swiper.activeIndex;
      if (activeIndex == 0) {
        arrow.style.fontSize = '5px';
      } else {
        arrow.style.fontSize = '20px';
      }
    },
  },
  mousewheel: true,
  keyboard: true,
});

swiper.on('slideChange', function () {
  console.log('object :>> ', swiper.activeIndex);
  const activeIndex = swiper.activeIndex;
  if (activeIndex == 0) {
    arrow.style.display = 'none';
  } else {
    arrow.style.display = 'block';
  }
});
