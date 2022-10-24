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

modalArrow.addEventListener('click', e => {
  e.preventDefault();
  modal.style.zIndex = '-1000';
});

openButtonModal.forEach(button =>
  button.addEventListener('click', e => {
    e.preventDefault();
    modal.style.zIndex = '1000';
    console.log('button', button);
  })
);
