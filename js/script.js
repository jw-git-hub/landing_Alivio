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