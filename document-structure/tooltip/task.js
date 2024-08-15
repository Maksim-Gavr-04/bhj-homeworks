const arrOfHasTooltips = [...document.querySelectorAll('.has-tooltip')];

arrOfHasTooltips.forEach((HasTooltip, idx) => {
  HasTooltip.insertAdjacentHTML("afterBegin", "<div class='tooltip' style='left: 0; top: 0'></div>");
  const tooltip = [...document.querySelectorAll('.tooltip')][idx];

  HasTooltip.addEventListener('click', (event) => {
    event.preventDefault();
    let { x, bottom } = HasTooltip.getBoundingClientRect();
    
    tooltip.style.left = `${x}px`;

    if (bottom + 50 >= innerHeight) {
      tooltip.style.top = `${bottom - 50}px`;
    } else {
      tooltip.style.top = `${bottom}px`;
    }

    tooltip.classList.add('tooltip_active');
    tooltip.textContent = HasTooltip.title;
  });

  HasTooltip.addEventListener('mouseout', () => tooltip.classList.remove('tooltip_active'));
});