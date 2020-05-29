/* Сообщения диалога - Скролл сразу внизу (при его наличии) */
let dialogDetailesMessages = document.querySelector('#dialog-detailed__messages');
dialogDetailesMessages.scrollTop = dialogDetailesMessages.scrollHeight;

/* Переключение между фреймами Диалогов */
let toggleMenu = document.querySelector('#frame-dialogs__header-toggle-menu');
let arrowBack = document.querySelector('#frame-settings__header-icon-arrow');

let frameDialogs = document.querySelector('#frame-dialogs');
let frameSettings = document.querySelector('#frame-settings');

toggleMenu.addEventListener('click', function() {
    frameDialogs.style.display = "none";
    frameSettings.style.display = "flex";
});

arrowBack.addEventListener('click', function() {
    frameSettings.style.display = "none";
    frameDialogs.style.display = "flex";
});