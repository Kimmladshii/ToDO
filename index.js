const form = document.getElementById('form');
const tubs = document.getElementById('tubs');
const notes = document.getElementById('notes');

let nodesValue = [];

/** Create template function for node */
function nodeTemplate(nodeText) {
  const node = document.createElement('DIV');
  node.classList.add('note');
  console.dir(node);

  let content = `
    <button type="button" class="note-status">Status</button>
    <span>${nodeText}</span>
    <span class="note-actions">
        <button type="button" class="note-delete">Delete</button>
    </span>
    <hr>
  `;

  node.innerHTML = content;
  return node;
}




function putToNodes(nodeText) {
  notes.appendChild(nodeTemplate(nodeText));
  console.log(notes)
}





form.addEventListener('submit', function(event) {
  event.preventDefault();
  // console.log(event);

  const input = form.querySelector('input');

  /** Save values to our array */
  const value = input.value.trim();
  nodesValue.push(value);
  putToNodes(value);
  
  
  console.log(nodesValue);
  input.value = '';
});

notes.addEventListener('click', function(event) {
  const target = event.target;
  
  if (target.nodeName === 'BUTTON') {
    console.log(event)
  }
});
