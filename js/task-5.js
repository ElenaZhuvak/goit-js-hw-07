const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.querySelector('body');



btn.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  span.textContent = randomColor;
  
  return body.style.backgroundColor = randomColor;
}
