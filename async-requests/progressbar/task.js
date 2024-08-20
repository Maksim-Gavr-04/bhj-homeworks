const form = document.getElementById('form');
const progress = document.getElementById('progress');
const upload = document.getElementById('upload');
const uploadProgressText = document.getElementById('upload_progress-text');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  
  const bytesInMB = 1048576;

  xhr.upload.onprogress = (event) => {
    progress.value = event.loaded / event.total;

    const loadedMB = (event.loaded / bytesInMB).toFixed(1);
    const allMB = (event.total / bytesInMB).toFixed(1);
    const loadedPercentage = ((event.loaded / event.total) * 100).toFixed(0);

    uploadProgressText.textContent = `Загружено ${loadedMB} из ${allMB} MB | ${loadedPercentage}%`;
  }

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Успех: ', xhr.status);
    } else {
      console.error('Ошибка загрузки: ', xhr.statusText);
    }
  };

  xhr.send(formData);
});