// Находим элементы на странице
const burger = document.getElementById('burger');        // Кнопка бургера
const mobileMenu = document.getElementById('mobileMenu'); // Выдвижное меню

// Создаем элемент затемнения фона
const overlay = document.createElement('div');
overlay.className = 'overlay'; // Добавляем класс для стилей
document.body.appendChild(overlay); // Вставляем в тело страницы

// Обработчик клика по бургеру
burger.addEventListener('click', function() {
    // toggle - добавляет класс если его нет, убирает если есть
    mobileMenu.classList.toggle('active'); // Показываем/скрываем меню
    overlay.classList.toggle('active');    // Показываем/скрываем затемнение
});

// Обработчик клика по затемнению
overlay.addEventListener('click', function() {
    // При клике на затемнение закрываем меню
    mobileMenu.classList.remove('active'); // Убираем класс active у меню
    overlay.classList.remove('active');    // Убираем класс active у затемнения
});
// ===== ВИДЕО ПЛЕЕР =====
// Находим элементы видео (с ID customPlayButton)
const video = document.querySelector('.about-video-container video');
const playButton = document.getElementById('customPlayButton'); // по ID

// Проверяем что элементы найдены
if (video && playButton) {
    // Обработчик клика по кастомной кнопке
    playButton.addEventListener('click', function() {
        video.play(); // запускаем видео
        video.controls = true; // ПОКАЗЫВАЕМ контролы только при воспроизведении
        playButton.style.display = 'none'; // скрываем кнопку
    });

    // Скрываем контролы когда видео на паузе
    video.addEventListener('pause', function() {
        video.controls = false;
        playButton.style.display = 'block';
    });

    // Скрываем контролы когда видео закончилось
    video.addEventListener('ended', function() {
        video.controls = false;
        playButton.style.display = 'block';
    });

    // Дополнительно: скрываем кнопку если видео уже играет
    video.addEventListener('play', function() {
        playButton.style.display = 'none';
    });
} else {
    console.log('Видео или кнопка не найдены');
}