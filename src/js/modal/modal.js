// const buttons = document.querySelectorAll('.header-menu__item');
// const modal = document.querySelector('.modal');
// console.log('buttons', buttons);

// buttons.addEventListener('click', () => {
//   if (buttons.tagName !== 'a') {
//     return false;
//     console.log('a');
//   }
//   console.log('a');
//   elmHamburger.classList.remove('modal');
// });

const openButtonModal = document.querySelectorAll('.service__button');
const modal = document.querySelector('.modal');
const modalArrow = document.querySelector('.arrow');
const modalClose = document.querySelector('.modal_close');

// const modalNavigation = document.querySelector('modalNav');
// console.log('modalNavigation:', modalNavigation);

// modalNavigation.addEventListener('click', e => {
//   e.preventDefault();
//   modal.style.zIndex = '-1000';
//   const currentModalSlide = modalSlider.realIndex;
//   mainPageSlider.slideTo(currentModalSlide);
// });

modalArrow.addEventListener('click', e => {
  e.preventDefault();
  modal.style.zIndex = '-1000';
  const currentModalSlide = modalSlider.realIndex;
  mainPageSlider.slideTo(currentModalSlide);
});

modalClose.addEventListener('click', e => {
  e.preventDefault();
  modal.style.zIndex = '-1000';
  const currentModalSlide = modalSlider.realIndex;
  mainPageSlider.slideTo(currentModalSlide);
});

openButtonModal.forEach(button =>
  button.addEventListener('click', e => {
    e.preventDefault();
    const clickedButton = e.target;
    modal.style.zIndex = '1000';
    let buttonIndex = clickedButton.getAttribute('id') - 1;
    modalSlider.slideTo(buttonIndex);
  })
);
