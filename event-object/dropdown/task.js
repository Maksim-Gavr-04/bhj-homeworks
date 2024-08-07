// Задача 2.1 (Выпадающие списки):
const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItems = Array.from(document.querySelectorAll(".dropdown__item"));

dropdownValue.addEventListener("click", expandCollapseList);

function expandCollapseList() {
  dropdownList.classList.toggle('dropdown__list_active');
}

dropdownItems.forEach(clickItem => {
  clickItem.addEventListener("click", (event) => {
    event.preventDefault();
    expandCollapseList();
    dropdownValue.textContent = clickItem.textContent;
  });
});