const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const signinButton = document.getElementById('signin__btn');
const signoutButton = document.getElementById('signoff__btn');
const welcome = document.getElementById('welcome');
const idUser = document.getElementById('user_id');

function postRequestOnSignin() {
  const xhr = new XMLHttpRequest();
  const formData = new FormData(document.getElementById('signin__form'));

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.responseType = 'json';

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {

      if (xhr.response.success) {
        localStorage.setItem('idUser', xhr.response.user_id);
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        idUser.textContent = xhr.response.user_id;
      } else {
        alert('Неверный логин/пароль');
      }
      
    } else {
      alert('Необходимо заполнить оба поля');
    }
  };

  xhr.send(formData);
}

function signinAndSignoutActions() {
  if (localStorage.getItem('idUser')) {
    welcome.classList.add('welcome_active');
    idUser.textContent = localStorage.getItem('idUser');
  } else {
    signin.classList.add('signin_active');
  }

  signinButton.addEventListener('click', (event) => {
    event.preventDefault();
    postRequestOnSignin();
    signinForm.reset();
  });

  signoutButton.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.removeItem('idUser');
    welcome.classList.remove('welcome_active');
    signin.classList.add('signin_active');
  });
}

signinAndSignoutActions();