let startTime = 0;
let elapsedTime = 0;
let intervalId;
let isRunning = false;
let lapCount = 0;

const timeDisplay = document.getElementById('time-display');
const lapsContainer = document.getElementById('laps');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const lapBtn = document.getElementById('lap-btn');

function formatTime(ms) {
  const date = new Date(ms);
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
  return `${minutes}:${seconds}.${milliseconds}`;
}

function updateDisplay() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  timeDisplay.textContent = formatTime(elapsedTime);
}

function startTimer() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateDisplay, 10);
    isRunning = true;
  }
}

function pauseTimer() {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
}

function resetTimer() {
  pauseTimer();
  elapsedTime = 0;
  timeDisplay.textContent = '00:00:00.00';
  lapsContainer.innerHTML = '';
  lapCount = 0;
}

function recordLap() {
  if (isRunning) {
    lapCount += 1;
    const lapTime = document.createElement('li');
    lapTime.textContent = `Lap ${lapCount}: ${formatTime(elapsedTime)}`;
    lapsContainer.appendChild(lapTime);
    lapsContainer.scrollTop = lapsContainer.scrollHeight; // Auto-scroll to the latest lap
  }
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);