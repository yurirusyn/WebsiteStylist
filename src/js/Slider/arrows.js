// const arrow = document.getElementsByClassName('swiper-button-prev')[0];
// const arrowNext = document.getElementsByClassName('swiper-button-next')[0];
// // arrow.style.display = 'none';
// const arrowTabletLeft = document.getElementsByClassName('arrow-left')[0];
// const arrowTabletRight = document.getElementsByClassName('arrow-right')[0];
// const arrowTabletLeftRev = document.getElementsByClassName(
//   'arrow-left--reviews'
// )[0];
// const arrowTabletRightRev = document.getElementsByClassName(
//   'arrow-right--reviews'
// )[0];

// // arrowTabletLeft.style.display = 'none';
// // arrowTabletRight.style.marginLeft = '60px';
// console.log('mainPageSlider:', mainPageSlider);
// // arrowTabletLeftRev.style.display = 'none';
// // arrowTabletRightRev.style.marginLeft = '60px';
// mainPageSlider.on('slideChange', function () {
//   const realIndex = mainPageSlider.realIndex;

//   if (realIndex == [0]) {
//     arrow.style.display = 'none';
//     // arrowTabletLeft.style.display = 'none';
//     arrowTabletRight.style.marginLeft = '60px';
//   } else {
//     // arrowTabletLeft.style.display = 'block';
//     arrowTabletRight.style.marginLeft = '60px';

//     // arrowTabletRight.style.marginLeft = '0px';
//     arrow.style.display = 'block';
//     arrow.style.marginTop = '-47px';
//     arrow.style.marginLeft = '-10px';
//     arrow.style.fontSize = '20px';
//     arrow.style.color = 'transparent';
//   }
// });

// mainPageSlider.on('slideChange', function () {
//   const realIndex = mainPageSlider.realIndex + 1;
//   const lastSlide = mainPageSlider.slides.length;
//   // const checkSlidesPerView = mainPageSlider.params.slidesPerView;

//   if (realIndex === lastSlide) {
//     arrowNext.style.display = 'none';
//     // arrowTabletRight.style.display = 'none';
//   } else {
//     // arrowTabletRight.style.display = 'block';
//     arrowNext.style.display = 'block';
//     arrowNext.style.marginTop = '-48px';
//     arrowNext.style.fontSize = '20px';
//     arrowNext.style.color = 'transparent';
//   }

//   // if (checkSlidesPerView === 2 && realIndex === 10) {
//   //   arrowNext.style.display = 'none';
//   //   // arrowTabletRight.style.display = 'none';
//   // } else {
//   //   // arrowTabletRight.style.display = 'block';
//   //   arrowNext.style.display = 'block';
//   //   arrowNext.style.marginTop = '-48px';
//   //   arrowNext.style.fontSize = '20px';
//   //   arrowNext.style.color = 'transparent';
//   // }
// });

// reviewsSlider.on('slideChange', function () {
//   const realIndex = reviewsSlider.realIndex;

//   if (realIndex == [0]) {
//     arrow.style.display = 'none';
//     // arrowTabletLeftRev.style.display = 'none';
//     // arrowTabletRightRev.style.marginLeft = '60px';
//   } else {
//     // arrowTabletLeftRev.style.display = 'block';
//     // arrowTabletRightRev.style.marginLeft = '0px';
//     arrow.style.display = 'block';
//     arrow.style.marginTop = '-47px';
//     arrow.style.marginLeft = '-10px';
//     arrow.style.fontSize = '20px';
//     arrow.style.color = '#ffffff';
//   }
// });

// reviewsSlider.on('slideChange', function () {
//   const realIndex = reviewsSlider.realIndex + 1;
//   const lastSlide = reviewsSlider.slides.length;

//   if (realIndex === lastSlide) {
//     arrowNext.style.display = 'none';
//   } else {
//     arrowNext.style.display = 'block';
//     arrowNext.style.marginTop = '-48px';
//     arrowNext.style.fontSize = '20px';
//     arrowNext.style.color = '#ffffff';
//   }
// });
