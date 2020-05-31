/* Сообщения диалога - Скролл сразу внизу (при его наличии) */
let dialogDetailesMessages = document.querySelector('#dialog-detailed__messages');
dialogDetailesMessages.scrollTop = dialogDetailesMessages.scrollHeight;

/* Переключение между фреймами Диалогов */
let toggleMenu = document.querySelector('#frame-dialogs__header-toggle-menu');
let arrowBackSettings = document.querySelector('#frame-settings__header-icon-arrow');
let arrowBackProfile = document.querySelector('#frame-profile__header-icon-arrow');
let linkProfile = document.querySelector('#link-profile');

let frameDialogs = document.querySelector('#frame-dialogs');
let frameSettings = document.querySelector('#frame-settings');
let frameProfile = document.querySelector('#frame-profile');

toggleMenu.addEventListener('click', function() {
    frameDialogs.style.display = "none";
    frameSettings.style.display = "flex";
});

arrowBackSettings.addEventListener('click', function() {
    frameSettings.style.display = "none";
    frameDialogs.style.display = "flex";
});

linkProfile.addEventListener('click', function() {
    frameSettings.style.display = "none";
    frameProfile.style.display = "flex";
});

arrowBackProfile.addEventListener('click', function() {
    frameProfile.style.display = "none";
    frameSettings.style.display = "flex";
});

/* Селект при нажатиии на иконку плюс */
let iconPlus = document.querySelector('#dialog-detailed__header-icons-icon-plus');
let iconPlusForm = document.querySelector('#dialog-detailed__header-icons-form');
iconPlus.addEventListener('click', function() {
    iconPlusForm.style.display = "block";
});