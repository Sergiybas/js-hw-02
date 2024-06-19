import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const refs = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector('input[name="delay"]'),
  stepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]'),
  submitButton: document.querySelector('button[type="submit"]'),
};

refs.form.addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = Number(refs.delayInput.value);
  const step = Number(refs.stepInput.value);
  const amount = Number(refs.amountInput.value);

  const promises = [];

  for (let i = 1; i <= amount; i++) {
    const currentDelay = delay + (i - 1) * step;
    const promise = createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        iziToast.show({
          message: `Promise ${position} resolved after ${delay}ms`,
          messageSize: '50',
          backgroundColor: 'green',
          position: 'topCenter',
          timeout: 15000,
        });
        console.log(`Promise ${position} resolved after ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        iziToast.show({
          message: ` Promise ${position} rejected after ${delay}ms`,
          messageSize: '50',
          backgroundColor: 'red',
          position: 'topCenter',
          timeout: 15000,
        });
        console.log(`Promise ${position} rejected after ${delay}ms`);
      });
    promises.push(promise);
  }

  Promise.all(promises).then(() => {
    refs.form.reset();
  });
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
