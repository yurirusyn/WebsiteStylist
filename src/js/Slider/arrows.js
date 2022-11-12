const arrow = document.getElementsByClassName('swiper-button-prev')[0];
const arrowNext = document.getElementsByClassName('swiper-button-next')[0];
arrow.style.display = 'none';


// SERVICES SLIDER

mainPageSlider.on('slideChange', function () {
  const realIndex = mainPageSlider.realIndex;

  if (realIndex == 0) {
    arrow.style.display = 'none';
  } else {
    arrow.style.display = 'block';
    arrow.style.marginTop = '-47px';
    arrow.style.marginLeft = '-10px';
    arrow.style.fontSize = '20px';
    arrow.style.color = '#ffffff';
  }
});

mainPageSlider.on('slideChange', function () {
  const realIndex = mainPageSlider.realIndex + 1;
  const lastSlide = mainPageSlider.slides.length;

  if (realIndex === lastSlide) {
    arrowNext.style.display = 'none';
  } else {
    arrowNext.style.display = 'block';
    arrowNext.style.marginTop = '-48px';
    arrowNext.style.fontSize = '20px';
    arrowNext.style.color = '#ffffff';
  }
});


// REVIEW ARROWS


reviewsSlider.on('slideChange', function () {
  const realIndex = mainPageSlider.realIndex;

  if (realIndex == 0) {
    arrow.style.display = 'none';
  } else {
    arrow.style.display = 'block';
    arrow.style.marginTop = '-47px';
    arrow.style.marginLeft = '-10px';
    arrow.style.fontSize = '20px';
    arrow.style.color = '#ffffff';
  }
});

reviewsSlider.on('slideChange', function () {
  const realIndex = mainPageSlider.realIndex + 1;
  const lastSlide = mainPageSlider.slides.length;

  if (realIndex === lastSlide) {
    arrowNext.style.display = 'none';
  } else {
    arrowNext.style.display = 'block';
    arrowNext.style.marginTop = '-48px';
    arrowNext.style.fontSize = '20px';
    arrowNext.style.color = '#ffffff';
  }
});
