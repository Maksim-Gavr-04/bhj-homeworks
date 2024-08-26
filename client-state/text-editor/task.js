function saveItemLocalStorage(key, value) {
  if (typeof value !== 'string') {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
}

function actionsWithEditor() {
  const editor = document.getElementById('editor');
  const clearEditorBtn = document.getElementById('editor__clear-btn');
  const keyOfEditor = 'textInEditor';

  if (localStorage.getItem(keyOfEditor)) {
    editor.value = localStorage.getItem(keyOfEditor);
  }

  editor.addEventListener('input', () => {
    // Если пользователь очистил поле (не используя кнопку "Очистить содержимое"):
    if (!editor.value) {
      localStorage.removeItem(keyOfEditor);
      return;
    } 

    // Если поле заполнено только пробелами:
    if (editor.value.match(/^\s*$/)) return;

    saveItemLocalStorage(keyOfEditor, editor.value.trim());
  });

  clearEditorBtn.addEventListener('click', () => {
    if (!editor.value.match(/^\s*$/)) {
      localStorage.removeItem(keyOfEditor);
    }

    editor.value = '';
  });
}

actionsWithEditor();