function setCookie(name, value) {
  document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
  const pairs = document.cookie.split('; ');
  const cookie = pairs.find(pair => pair.startsWith(name + '='));
  return cookie || null;
}

function actionsWithModal() {
  if (getCookie('modalIsClosed')) {
    return;
  }

  const modalOverlay = document.getElementById("subscribe-modal");
  modalOverlay.classList.add("modal_active");

  const modalClose = document.querySelector(".modal__close");
  modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove("modal_active");
    setCookie('modalIsClosed', 'true');
  });
}

actionsWithModal();