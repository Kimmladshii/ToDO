const form = document.getElementById('form');
const tubs = document.getElementById('tubs');
const notes = document.getElementById('notes');

let nodesValue = [];


form.addEventListener('submit', function(event) {
  event.preventDefault();
  // console.log(event);

  const input = form.querySelector('input');
  console.log(input.value);
  nodesValue.push(input.value.trim());
  input.value = '';
  console.log(nodesValue);
});