const input = document.getElementById('task__input');
const taskBtn = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

input.addEventListener('keyup', (event) => {
  if (event.key !== 'Enter') return;
  addTask();
});

taskBtn.addEventListener('focus', addTask);

taskList.addEventListener('click', (event) => {
  const arrOfRemoveTaskBtns = [...document.querySelectorAll('.task__remove')];
  const removeTaskBtn = arrOfRemoveTaskBtns.find(task => task === event.target);

  if (event.target !== removeTaskBtn || removeTaskBtn === undefined) return;
  
  removeTaskBtn.closest('.task').remove();
});

function addTask() {
  input.value.trim();

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