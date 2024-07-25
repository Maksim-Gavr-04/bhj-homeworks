// Задача 1.2 (Игра-кликер) + Повышенный уровень сложности:
const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");

let start = Date.now();

cookie.onmousedown = function () {
  cookie.width = 240;
}

cookie.onmouseup = function () {
  cookie.width = 200;
}

cookie.onclick = function () {
  counter.textContent++;
  let end = Date.now();
  let passedSeconds = ((end - start) / 1000);

  speed.textContent = (1 / passedSeconds).toFixed(2);
  start = end;
}