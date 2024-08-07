// Задача 2.2 (Соло на клавиатуре) + Повышенный уровень сложности:
class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.status__timer');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода символа вызываем this.success()
      При неправильном вводе символа - this.fail();
      DOM-элемент текущего символа находится в свойстве this.currentSymbol.
    */
    const symbolComparison = (event) => {
      let key = event.key;

      if (key === this.currentSymbol.textContent) {
        this.success();
        return;
      } 

      if (key === 'Shift' || key === 'Alt' || key === 'Control') {
        return;
      }

      this.fail();
    };
    
    document.addEventListener("keyup", symbolComparison);
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    // Удаление старого интервала:
    clearInterval(this.idInterval);

    // Выбор и вставка в HTML нового слова:
    const word = this.getWord();
    this.renderWord(word);

    // Расчёт и вставка в HTML времени для ввода нового слова:
    let remainingSeconds = Array.from(this.wordElement.textContent).length;
    this.timerElement.textContent = remainingSeconds;

    // Установка нового интервала:
    this.idInterval = setInterval(() => {
      remainingSeconds -= 1;
      this.timerElement.textContent = remainingSeconds;
      if (remainingSeconds === 0) this.fail();
    }, 1000);
  }

  getWord() {
    const words = [
        'avocado',
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript',
        'Арбуз',
        'Клавиатура',
        'Я люблю kitkat'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'));