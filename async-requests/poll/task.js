// function sendRequest(method, url, dataForPost = null, contentType = null) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.responseType = 'json';
//     if (contentType !== null) {
//       xhr.setRequestHeader('Content-Type', contentType);
//     }

//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         reject(xhr.response);
//       } else {
//         resolve(xhr.response);
//       }
//     }

//     xhr.onerror = () => {
//       reject(xhr.response);
//     }

//     xhr.send(dataForPost);
//   });
// }

// const actionsAfterSuccessXhr = () => {
//   sendRequest('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
//   .then(response => {
//     const title = response.data.title;
//     const answers = response.data.answers;

//     const pollTitle = document.getElementById('poll__title');
//     const pollAnswers = document.getElementById('poll__answers');

//     pollTitle.insertAdjacentHTML("beforeEnd", `${title}`);

//     answers.forEach(answer => {
//       pollAnswers.insertAdjacentHTML("beforeEnd", `
//         <button class="poll__answer">${answer}</button>
//       `);
//     });

//     pollAnswers.addEventListener('click', (event) => {
//       if (event.target.classList.contains('poll__answer')) {
//         alert('Спасибо, Ваш голос засчитан!');
//         const answerIndex = response.data.answers.indexOf(event.target.textContent);
//         const dataForPost = `vote=${response.id}&answer=${answerIndex}`;
//         sendRequest('POST', 'https://students.netoservices.ru/nestjs-backend/poll', dataForPost, 'application/x-www-form-urlencoded')
//           .then(response => {
//             const pollPersentages = document.getElementById('poll__percentages');
//             const arrOfObjectsStat = response.stat;

//             let sumOfVotes = 0;
//             arrOfObjectsStat.forEach(objectStat => sumOfVotes += objectStat.votes);

//             arrOfObjectsStat.forEach(objectStat => {
//               const answerPercentage = ((objectStat.votes / sumOfVotes) * 100).toFixed(2);
//               pollPersentages.insertAdjacentHTML("beforeEnd", `
//                 <p class="poll__percentage">
//                   ${objectStat.answer} ─ <span class=".poll__percentage__bold">${answerPercentage}%</span>
//                 </p>
//               `);
//             });
//           })
//           .catch(error => console.log(error));
//       }
//     })
//   })
//   .catch(error => console.log(error));
  
// }

// actionsAfterSuccessXhr();


// ----------------------------------------------------------------------------------
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.responseType = 'json';

xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    actionsAfterSuccessfulRequest(xhr.response);
  } else {
    console.error('Ошибка загрузки:', xhr.statusText);
  }
};

xhr.send();

const actionsAfterSuccessfulRequest = (response) => {
  const title = response.data.title;
  const answers = response.data.answers;

  const pollTitle = document.getElementById('poll__title');
  const pollAnswers = document.getElementById('poll__answers');

  pollTitle.insertAdjacentHTML("beforeEnd", `${title}`);

  answers.forEach(answer => {
    pollAnswers.insertAdjacentHTML("beforeEnd", `
      <button class="poll__answer">${answer}</button>
    `);
  });

  pollAnswers.addEventListener('click', (event) => {
    if (event.target.classList.contains('poll__answer')) {
      alert('Спасибо, Ваш голос засчитан!');
      const answerIndex = response.data.answers.indexOf(event.target.textContent);
      requestForPercentageOfVotes(answerIndex, response);
    }
  });
};

const requestForPercentageOfVotes = (answerIndex, response) => {
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');

  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.responseType = 'json';

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const pollPersentages = document.getElementById('poll__percentages');
      const arrOfObjectsStat = xhr.response.stat;

      let sumOfVotes = 0;
      arrOfObjectsStat.forEach(objectStat => sumOfVotes += objectStat.votes);

      arrOfObjectsStat.forEach(objectStat => {
        const answerPercentage = ((objectStat.votes / sumOfVotes) * 100).toFixed(2);
        pollPersentages.insertAdjacentHTML("beforeEnd", `
          <p class="poll__percentage">
            ${objectStat.answer} ─ <span class=".poll__percentage__bold">${answerPercentage}%</span>
          </p>
        `);
      });
    } else {
      console.error('Ошибка загрузки: ', xhr.response);
    }
  };

  xhr.send(`vote=${response.id}&answer=${answerIndex}`);
};