const controls = document.querySelector('#controls');
console.log(controls);
const input = document.querySelector('input');
console.log(input);
const btnCreate = document.querySelector('button[data-create]');
console.log(btnCreate);
const btnDestroy = document.querySelector('button[data-destroy]');
console.log(btnDestroy);
const boxes = document.querySelector('#boxes');
console.log(boxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


btnCreate.addEventListener('click', setInput)

function setInput(amount) {
  if (amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
}

function createBoxes(amount) {
  for (let i = 0; i <= amount; i++) {
    const div = document.createElement('div');
    let size = 30;
    div.style.width = size += 10;
    div.style.height = size += 10;
    div.style.backgroundColor = getRandomHexColor();

    return boxes.append('div')
  }
}
btnCreate.addEventListener('click', createBoxes)