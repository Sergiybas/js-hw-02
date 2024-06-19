const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let handlerStart;

buttonStop.addEventListener('click', handlerStop);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
buttonStart.addEventListener('click', () => {
  handlerStart = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  if (handlerStart) {
    buttonStart.disabled = true;
  }
});

function handlerStop() {
  clearInterval(handlerStart);
  buttonStart.disabled = false;
}
