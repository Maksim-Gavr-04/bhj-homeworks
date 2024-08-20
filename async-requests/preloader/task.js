const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.responseType = 'json';

xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    actionsAfterSuccessfulRequest(xhr.response);
  } else {
    console.error('Ошибка загрузки: ', xhr.statusText);
  }
};

xhr.send();

const actionsAfterSuccessfulRequest = (response) => {
  document.getElementById('loader').remove();
  
  const arrOfObjectsCurrencies = Object.values(response.response.Valute);
  arrOfObjectsCurrencies.forEach(objectCurrency => {
    const items = document.getElementById('items');
    items.insertAdjacentHTML("beforeEnd", `
      <div class="item">
        <div class="item__code">${objectCurrency.CharCode}</div>
        <div class="item__value">${objectCurrency.Value}</div>
        <div class="item__currency">руб.</div>
      </div>
      `);
  });
};