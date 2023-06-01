const closePopUp = document.getElementById('close_pop_up');
const popUp = document.getElementById('pop_up');
const scrollClose = document.getElementById('perHead');
const popUpBackground = document.getElementById('wrap_back');
const modal = document.getElementById('modalId');
closePopUp.addEventListener('click', () => {
  popUpBackground.classList.remove('wrap-pop-up');
});
closePopUp.addEventListener('click', () => {
  popUp.classList.remove('activePopUp');
});
scrollClose.addEventListener('click', () => {
  popUp.classList.remove('activePopUp');
  popUpBackground.classList.remove('wrap-pop-up');
  modal.style.zIndex = '-1000';
});

const footerNavLinks = document.querySelectorAll('.footer__nav-link');

footerNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    popUp.classList.remove('activePopUp');
    popUpBackground.classList.remove('wrap-pop-up');
    modal.style.zIndex = '-1000';
  });
});

// const phonNum = document.getElementById('phone_number');
// console.log('phonNum:', phonNum.value);

// document.getElementById('testBut').onclick = clickButton;
// function clickButton() {
//   let inputValue = document.getElementById('phone_number').value;
//   console.log('inputValue:', inputValue);

//   console.log('work');
// }
