let input = document.getElementById("input");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let continueBtn = document.getElementById("continue");
let count = document.getElementById("count");
let SumSeconds;
let timer;

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stopTimer);
continueBtn.addEventListener("click", continueTimer);
disable(stopBtn);
disable(continueBtn);

function getMinutes(SumSeconds) {
  return Math.floor(SumSeconds / 60);
}

function getSeconds(SumSeconds) {
  let seconds = SumSeconds % 60;
  return seconds < 10 ? "0" + seconds : seconds;
}

function start() {
  SumSeconds = input.value * 60;
  count.innerHTML = getMinutes(SumSeconds) + ":" + getSeconds(SumSeconds);
  disable(input);
  disable(startBtn);
  continueTimer();
}

function continueTimer() {
  timer = setInterval(func, 1000);
  disable(continueBtn);
  enable(stopBtn);
}

function func() {
  if (SumSeconds > 0) {
    SumSeconds--;
    count.innerHTML = getMinutes(SumSeconds) + ":" + getSeconds(SumSeconds);
  } else {
    enable(input);
    enable(startBtn);
    disable(stopBtn);
    disable(continueBtn);
  }
}

function stopTimer() {
  clearInterval(timer);
  disable(stopBtn);
  enable(continueBtn);
}
function disable(element) {
  element.setAttribute("disabled", "");
}
function enable(element) {
  element.removeAttribute("disabled");
}
