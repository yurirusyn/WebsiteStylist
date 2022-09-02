const input = document.querySelector('#Search');
input.addEventListener('focus', moveCursorToEnd);

function moveCursorToEnd() {
  input.selectionStart = input.selectionEnd = input.value.length;
  input.value = '+380';
  input.removeEventListener('focus', moveCursorToEnd);
}
