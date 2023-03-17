
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  inputEl: document.querySelector('[type="number"]'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);
function createBoxes() {
getBoxes(refs.inputEl.value);
}
function destroyBoxes() {
  refs.boxes.innerHTML = '';
}
function getBoxes(amount) {
let defaultSize = 30;
let newSize = 0;
for (let i = 0; i < amount; i += 1) {
  let box = document.createElement('div');
  newSize = defaultSize + i * 10;
  box.style = `width: ${newSize}px; height: ${newSize}px;
  background-color: ${getRandomHexColor()}`;
  refs.boxes.append(box);
}
}