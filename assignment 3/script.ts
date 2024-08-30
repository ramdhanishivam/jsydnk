const timerElement = document.getElementById('timer') as HTMLElement;
const startButton = document.getElementById('start') as HTMLButtonElement;
const pauseButton = document.getElementById('pause') as HTMLButtonElement;
const resetButton = document.getElementById('reset') as HTMLButtonElement;
const countdownBtn = document.getElementById('countdown-btn') as HTMLButtonElement;

let intervalId: number | null = null;
let timeElapsed = 0;
let isCountDown = false;
const countDownTarget = 60;

function formatTime(ms: number): string {
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const seconds = Math.floor((ms / 1000) % 60);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateTimer() {
  if (isCountDown) {
    timeElapsed = Math.max(0, timeElapsed - 1000);
    if (timeElapsed === 0) {
      clearInterval(intervalId!);
      intervalId = null;
    }
  } else {
    timeElapsed += 1000;
  }

  timerElement.textContent = formatTime(timeElapsed);
}

function startTimer() {
  if (intervalId === null) {
    intervalId = window.setInterval(updateTimer, 1000);
  }
}

function pauseTimer() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function startCountDown() {
  console.log(timeElapsed);
  console.log(isCountDown);
  if (!isCountDown) {
    isCountDown = true;
    timeElapsed = countDownTarget;
    if (intervalId === null) {
      startTimer();
    }
  }
}

function resetTimer() {
  timeElapsed = 0;
  isCountDown = false;
  pauseTimer();
  updateTimer();
}

startButton.addEventListener('click', () => {
  if (isCountDown) {
    isCountDown = false;
  }
  startTimer();
});

pauseButton.addEventListener('click', () => {
  pauseTimer();
});

countdownBtn.addEventListener('click', startCountDown);

resetButton.addEventListener('click', resetTimer);

timerElement.textContent = formatTime(timeElapsed);