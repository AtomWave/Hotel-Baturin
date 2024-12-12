// main.js

import '/public/styles/style.scss'; // Подключаем глобальные стили
import { setupCounter } from './js/counter.js';
import { initTabs } from './js/tabs.js';
import { initializeMenuToggle } from "./js/icon-menu.js";
import { createButton } from './js/buttonModule.js';
import { createDynamicList } from './js/dynamicList.js';
import { items } from './js/menuItems.js'; // Импортируем только данные меню
import { hotels } from './js/hotels.js'; // Импортируем только данные об отелях
import { imageItems } from './js/imageItems.js'; // Импортируем только данные изображений
import { customListData } from './js/custom-list.js'; // Импортируем данные для дополнительного списка

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

// =======================================
document.addEventListener('DOMContentLoaded', () => {
  createDynamicList(items, {
    containerSelector: '.menu__body',
    listType: 'ul',
    listClass: 'menu__list list-reset',
    itemType: 'li',
    itemClass: 'menu__item',
    linkClass: 'menu__link' // Класс для ссылок
  });
});

// ================= Список изображений ===================================
document.addEventListener('DOMContentLoaded', () => {
  createDynamicList(imageItems, {
    containerSelector: '.image-gallery',
    listType: 'ul',
    listClass: 'image-gallery__wrapper',
    itemType: 'li',
    itemClass: 'image-item'
  });
});

// ================= Список отелей ========================================
document.addEventListener('DOMContentLoaded', () => {
  createDynamicList(hotels, {
    containerSelector: '.hotels',
    listType: 'ul',
    listClass: 'hotel-list',
    itemType: 'li',
    itemClass: 'hotel-item'
  });
});

// ================= Пример создания дополнительного списка =================
document.addEventListener('DOMContentLoaded', () => {
  createDynamicList(customListData, {
    containerSelector: '.custom-list-container', // Убедитесь, что этот селектор существует в вашем HTML
    listType: 'ul',
    listClass: 'custom-list',
    itemType: 'li',
    itemClass: 'custom-item'
  });
});
