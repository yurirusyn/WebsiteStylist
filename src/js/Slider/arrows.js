const arrow = document.getElementsByClassName('swiper-button-prev')[0];
const arrowNext = document.getElementsByClassName('swiper-button-next')[0];
arrow.style.display = 'none';

swiper.on('slideChange', function () {
  const realIndex = swiper.realIndex;
  if (realIndex == 0) {
    arrow.style.display = 'none';
  } else {
    arrow.style.display = 'block';
    arrow.style.marginTop = '-63px';
    arrow.style.marginLeft = '-10px';
    arrow.style.fontSize = '20px';
    arrow.style.color = '#ffffff';
  }
});

swiper.on('slideChange', function () {
  const realIndex = swiper.realIndex + 1;
  const lastSlide = swiper.slides.length;
  if (realIndex === lastSlide) {
    arrowNext.style.display = 'none';
  } else {
    arrowNext.style.display = 'block';
    arrowNext.style.marginTop = '-63px';
    arrowNext.style.fontSize = '20px';
    arrowNext.style.color = '#ffffff';
  }
});
