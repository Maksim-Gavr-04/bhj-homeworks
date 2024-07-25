// Задача 1.3 (Игра «Поймай кротов»):
const mole = document.getElementById("dead");
const lost = document.getElementById("lost");

const holeNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const getHole = idx => document.getElementById(`hole${idx}`);

holeNumbers.forEach((holeNumber) => {
  const hole = getHole(holeNumber);

  hole.onclick = function () {
    if (hole.classList.contains("hole_has-mole")) {
      mole.textContent++;
    } else {
      lost.textContent++;
    }

    if (mole.textContent === "10") {
      alert("Победа 🎉");
      mole.textContent = 0;
      lost.textContent = 0;
    }
    
    if (lost.textContent === "5") {
      alert("Проигрыш 🙁\nПопробуйте ещё раз!");
      mole.textContent = 0;
      lost.textContent = 0;
    }
  }
});