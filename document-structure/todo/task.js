const taskBtn = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

taskBtn.addEventListener('click', (event) => {
  event.preventDefault();
  addTask();
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('task__remove')) {
    event.target.closest('.task').remove();
  }
});

function addTask() {
  const input = document.getElementById('task__input');
  if (input.value.length > 0) {
    const taskTemplate = 
    `<div class="task">
      <div class="task__title">
        ${input.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>`;
    taskList.insertAdjacentHTML("beforeEnd", taskTemplate);
    input.value = "";
  }
}