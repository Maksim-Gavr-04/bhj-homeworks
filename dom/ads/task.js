// Задача 4.2 (Ротатор рекламы) + Повышенный уровень сложности:
const arrOfCases = Array.from(document.querySelectorAll('.rotator__case'));
let activeCase = document.querySelector('.rotator__case_active');
activeCase.style.color = activeCase.dataset.color;

function interval(speed) {
  let intervalId = setInterval(function() {
    const allIdx = arrOfCases.length - 1; // 5
    let idx = arrOfCases.indexOf(activeCase); // индекс активного текст.объявления

    activeCase.classList.remove('rotator__case_active');
    activeCase = arrOfCases[idx + 1];
    if (idx === allIdx) {
      idx = 0;
      activeCase = arrOfCases[idx];
    }

    activeCase.classList.add('rotator__case_active'); // добавление класса следующему текст.объявлению
    activeCase.style.color = activeCase.dataset.color; // установка цвета следующему текст.объявлению
    interval(activeCase.dataset.speed); // установка нового интервала с другим временем
    clearInterval(intervalId); // удаление старого интервала
  }, speed);
}

interval(activeCase.dataset.speed);