import Cleave from 'cleave.js';

var cleaveBrackets = new Cleave('.form__input-phone-1', {
  delimiters: ['(', ')', '-', '-', '-'],
  blocks: [4, 2, 3, 2, 2],
});
