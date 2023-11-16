
// Функция для открытия модального окна с настройками
function openSettingsModal() {
   var modal = document.getElementById("settings-modal");
   modal.style.display = "block";
}

// Функция для закрытия модального окна
// function closeSettingsModal() {
//    var modal = document.getElementById("settings-modal");
//    modal.style.display = "none";
// }

// Обработчик события для кнопки открытия настроек
// document.getElementById("open-settings").addEventListener("click", openSettingsModal);

// Обработчик события для кнопки закрытия настроек
// document.getElementById("close-settings").addEventListener("click", closeSettingsModal);

//Registrerer serviceworker og sender beskeder i consolen
if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('../../sw.js')
       .then(reg => console.log('service worker registered', reg))
       .catch(err => console.error('service worker not registered', err))
}
