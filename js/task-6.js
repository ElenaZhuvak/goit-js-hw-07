const controls = document.querySelector('#controls');
console.log(controls);
const input = document.querySelector('input');
console.log(input);
const btnCreate = document.querySelector('button[data-create]');
console.log(btnCreate);
const btnDestroy = document.querySelector('button[data-destroy]');
console.log(btnDestroy);
const boxContainer = document.querySelector('#boxes');
console.log(boxContainer);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnCreate.addEventListener('click', onBtnCreateClick);
function onBtnCreateClick() {
  const amount = Number.parseInt(input.value.trim());
  console.log(amount);
  if (amount >=1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    input.value = '';
  } else {
    alert (`Кількість квадратів не задовольняє умові`);
  }
}

function createBoxes(amount) {

  for (let i = 0; i < amount; i++) {
    const boxes = document.createElement('div');
    boxes.style.width = `${30 + i * 10}px` ;
    boxes.style.height = `${30 + i * 10}px` ;
    boxes.style.backgroundColor = getRandomHexColor();
    boxes.classList.add("box-item");
    boxContainer.append(boxes);
  }
}

btnDestroy.addEventListener('click', destroyBoxes)
function destroyBoxes () {
  boxContainer.innerHTML = '';
}



