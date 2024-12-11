// main.js
import '/public/styles/style.scss'; // Подключаем глобальные стили
import { setupCounter } from './js/counter.js';
import { initTabs } from './js/tabs.js';
import { initializeMenuToggle } from "./js/icon-menu.js";
import { createButton } from './js/buttonModule.js';
import { createDynamicList } from './js/dynamicList.js';
import { items, options as menuOptions } from './js/menuItems.js'; // Импортируем данные и опции меню
import { hotels } from './js/hotels.js'; // Импортируем данные об отелях
import { imageItems, imageOptions } from './js/imageItems.js'; // Импортируем данные и опции изображений

const counter = document.querySelector('.counter');
if (counter) {
  setupCounter(counter);
}

// Инициализация вкладок и меню
initTabs();
initializeMenuToggle('.icon-menu', '.header', '.main');

// Создаем кнопку "Login"
createButton({
  elementType: 'button',
  className: 'header__button button',
  href: '#',
  ariaLabel: 'Открыть личный кабинет.',
  text: 'Login',
  parentSelector: '.header__menu'
});

// ================= Меню навигации =======================================

// Создаем динамический список меню и добавляем его на страницу только один раз
document.addEventListener('DOMContentLoaded', () => {
  createDynamicList(items, menuOptions); // Используем импортированные данные и опции
});

// ================= Список изображений ===================================

// Создаем динамический список изображений и добавляем его на страницу только один раз
document.addEventListener('DOMContentLoaded', () => {
  createDynamicList(imageItems, imageOptions); // Используем импортированные данные и опции для изображений
});

// ================= Список отелей ========================================

// Опции для настройки списка отелей
const hotelOptions = {
  containerSelector: '.hotel-list',
};

// Создаем динамический список отелей и добавляем его на страницу только один раз
document.addEventListener('DOMContentLoaded', () => {
  createDynamicList(hotels, hotelOptions);
});
