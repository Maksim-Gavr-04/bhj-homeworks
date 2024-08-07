// Задача 4.1 (Появление элементов при прокрутке):
const arrOfReveals = Array.from(document.querySelectorAll(".reveal"));

window.addEventListener("scroll", appearanceOrHide);

function appearanceOrHide() {
  arrOfReveals.forEach(reveal => {
    const {top, bottom} = reveal.getBoundingClientRect();
    const quarterOfReveal = (bottom - top) / 4; // 50

    // Появление при прокрутке:
    if (/*Вниз*/ top + quarterOfReveal < window.innerHeight && /*Вверх*/ bottom > quarterOfReveal) {
      reveal.classList.add('reveal_active');
    }

    // Скрытие при прокрутке:
    if (/*Вверх*/ top + quarterOfReveal > window.innerHeight || /*Вниз*/ bottom < quarterOfReveal) {
      reveal.classList.remove('reveal_active');
    }
  });
}