const arrOfHasTooltips = [...document.querySelectorAll('.has-tooltip')];

arrOfHasTooltips.forEach((hasTooltip, idx) => {
  hasTooltip.insertAdjacentHTML("afterEnd", "<div class='tooltip' style='left: 0; top: 0'></div>");
  const tooltip = document.querySelectorAll('.tooltip')[idx];

  hasTooltip.addEventListener('click', (event) => {
    event.preventDefault();
    if (hasTooltip.title === tooltip.textContent) {
      tooltip.classList.toggle('tooltip_active');
      return;
    }

    tooltip.textContent = hasTooltip.title;
    
    let { x, bottom } = hasTooltip.getBoundingClientRect();

    tooltip.style.left = `${x}px`;
    if (bottom + 50 >= innerHeight) {
      tooltip.style.top = `${bottom - 50}px`;
    } else {
      tooltip.style.top = `${bottom}px`;
    }

    tooltip.classList.add('tooltip_active');
  });
});