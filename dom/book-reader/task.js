// Задача 4.3 (Онлайн-читалка) + Повышенный уровень сложности:
const arrOfFontSizes = Array.from(document.querySelectorAll('.font-size'));
let activeFontSize = document.querySelector('.font-size_active');

const arrOfColorsAndBackgrounds = Array.from(document.querySelectorAll('.color'));
let activeColor = Array.from(document.querySelectorAll('.color_active'))[0];
let activeBackground = Array.from(document.querySelectorAll('.color_active'))[1];

const book = document.querySelector('.book');

// Изменение размера шрифта:
arrOfFontSizes.forEach(clickItem => {
  clickItem.addEventListener('click', function(event) {
    event.preventDefault();
    activeFontSize.classList.remove('font-size_active');
    activeFontSize = clickItem;
    activeFontSize.classList.add('font-size_active');
    
    book.classList.remove('book_fs-small', 'book_fs-big');

    const size = event.target.dataset.size;

    if (size) {
      book.classList.add(`book_fs-${size}`);
    }
    // // Выбор увеличенного шрифта:
    // if (activeFontSize.classList.contains('font-size_big')) {
    //   book.classList.remove('book_fs-small');
    //   book.classList.add('book_fs-big');
    // } // Выбор уменьшенного шрифта:
    // else if (activeFontSize.classList.contains('font-size_small')) {
    //   book.classList.remove('book_fs-big');
    //   book.classList.add('book_fs-small');
    // } else { // Выбор шрифта по умолчанию:
    //   book.classList.remove('book_fs-big');
    //   book.classList.remove('book_fs-small');
    // }
  });
});

arrOfColorsAndBackgrounds.forEach(clickItem => {
  // Изменение цвета шрифта:
  if (clickItem.hasAttribute('data-text-color')) {
    clickItem.addEventListener('click', function(event) {
      event.preventDefault();
      activeColor.classList.remove('color_active');
      activeColor = clickItem;
      activeColor.classList.add('color_active');

      book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');

      const textColor = event.target.dataset.textColor;

      if (textColor) {
        book.classList.add(`book_color-${textColor}`);
      }
      // // Выбор белого цвета шрифта:
      // if (activeColor.classList.contains('text_color_whitesmoke')) {
      //   book.classList.remove('book_color-gray');
      //   book.classList.remove('book_color-black');
      //   book.classList.add('book_color-whitesmoke');
      // } // Выбор серого цвета шрифта:
      // else if (activeColor.classList.contains('text_color_gray')) {
      //   book.classList.remove('book_color-whitesmoke');
      //   book.classList.remove('book_color-black');
      //   book.classList.add('book_color-gray');
      // } else { // Выбор цвета шрифта по умолчанию:
      //   book.classList.remove('book_color-gray');
      //   book.classList.remove('book_color-whitesmoke');
      // }
    });
  } 
  // Изменение фона:
  if (clickItem.hasAttribute('data-bg-color')) {
    clickItem.addEventListener('click', function(event) {
      event.preventDefault();
      activeBackground.classList.remove('color_active');
      activeBackground = clickItem;
      activeBackground.classList.add('color_active');

      book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

      const bgColor = event.target.dataset.bgColor;
      console.log(bgColor)
      if (bgColor) {
        book.classList.add(`book_bg-${bgColor}`);
      }
      // // Выбор чёрного фона:
      // if (activeBackground.classList.contains('bg_color_black')) {
      //   book.classList.remove('book_bg-white');
      //   book.classList.remove('book_bg-gray');
      //   book.classList.add('book_bg-black');
      // } // Выбор серого фона:
      // else if (activeBackground.classList.contains('bg_color_gray')) {
      //   book.classList.remove('book_bg-white');
      //   book.classList.remove('book_bg-black');
      //   book.classList.add('book_bg-gray'); 
      // } else { // Выбор фона по умолчанию:
      //   book.classList.remove('book_bg-black');
      //   book.classList.remove('book_bg-gray');
      // }
    });
  }
});