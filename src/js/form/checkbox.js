const checkboxTelegram = document.querySelector('#Telegram');
const checkboxViber = document.querySelector('#Viber');
const fromInput = document.querySelector('.form__input-messager');

checkboxTelegram.addEventListener('change', function () {
  if (this.checked) {
    fromInput.value = this.value;
  }
});

checkboxViber.addEventListener('change', function () {
  if (this.checked) {
    fromInput.value = this.value;
  }
});
