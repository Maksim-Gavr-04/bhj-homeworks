// Задача 1.1 (Таймер обратного отсчёта) + Повышенный уровень сложности:
let startValue = 59;
let timer = document.getElementById("timer");

function countdown() {
  startValue -= 1;
  timer.textContent = startValue;
  if (startValue === 0) {
    alert("Вы победили в конкурсе! 🎉");
    clearInterval(idInterval);
    window.location.assign("https://developer.mozilla.org/ru/docs/Web/API/Location/assign");
  }
}

let idInterval = setInterval(countdown, 100);