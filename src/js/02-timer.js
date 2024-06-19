import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button[data-start]');
const dayElement = document.querySelector('.value[data-days]');
const hoursElement = document.querySelector('.value[data-hours]');
const minutesElement = document.querySelector('.value[data-minutes]');
const secondsElement = document.querySelector('.value[data-seconds]');

buttonStart.disabled = true;

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > new Date()) {
      buttonStart.disabled = false;
      console.log(selectedDates);
    } else {
      buttonStart.disabled = true;
      alert('Please choose a date in the future');
    }
  },
});

buttonStart.addEventListener('click', () => {
  const targetDate = new Date(input.value);
  const timerInterval = setInterval(() => {
    const now = new Date();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      alert('Time is up!');
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    dayElement.textContent = String(days).padStart(2, '0');

    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hoursElement.textContent = String(hours).padStart(2, '0');

    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    minutesElement.textContent = String(minutes).padStart(2, '0');

    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    secondsElement.textContent = String(seconds).padStart(2, '0');
  }, 1000);
});