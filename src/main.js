// main.js

import '/public/styles/style.scss'; // Подключаем глобальные стили

import { setupCounter } from './js/counter.js';
import { initTabs } from './js/tabs.js';
import { initializeMenuToggle } from "./js/icon-menu.js";
import { createButton } from './js/buttonModule.js';
import { createDynamicList } from './js/dynamicList.js';
import { items } from './js/menuItems.js'; // Импортируем только данные меню

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
document.addEventListener('DOMContentLoaded', () => {
  const menuList = createDynamicList(items, {
    listType: 'ul',
    listClass: 'menu__list list-reset',
    itemType: 'li',
    itemClass: 'menu__item',
    linkClass: 'menu__link' // Класс для ссылок
  });

  const menuContainer = document.querySelector('.menu__body');
  if (menuContainer) {
    menuContainer.appendChild(menuList); // Добавляем созданный список меню
  } else {
    console.error('Родительский элемент .menu-container не найден.');
  }
});

// ================= Список изображений ===================================
// document.addEventListener('DOMContentLoaded', () => {
//   const imageList = createDynamicList(imageItems, {
//     listType: 'ul',
//     listClass: 'image-gallery__wrapper list-reset',
//     itemType: 'li',
//     itemClass: 'image-item'
//   });

//   const imageGalleryContainer = document.querySelector('.image-gallery');
//   if (imageGalleryContainer) {
//     imageGalleryContainer.appendChild(imageList); // Добавляем созданный список изображений
//   } else {
//     console.error('Родительский элемент .image-gallery-container не найден.');
//   }
// });

// ================= Список отелей ========================================
// document.addEventListener('DOMContentLoaded', () => {
//   const hotelList = createDynamicList(hotels, {
//     listType: 'ul',
//     listClass: 'hotel-list list-reset',
//     itemType: 'li',
//     itemClass: 'hotel-item'
//   });

//   const parentElement = document.querySelector('.hotels');
//   if (parentElement) {
//     parentElement.appendChild(hotelList); // Добавляем созданный список в родительский элемент
//   } else {
//     console.error('Родительский элемент .hotels не найден.');
//   }
// });

// ================= Пример создания дополнительного списка =================
// document.addEventListener('DOMContentLoaded', () => {
//   const customList = createDynamicList(customListData, {
//     listType: 'ul',
//     listClass: 'custom-list list-reset',
//     itemType: 'li',
//     itemClass: 'custom-item'
//   });

//   const customListContainer = document.querySelector('.custom-list-container');
//   if (customListContainer) {
//     customListContainer.appendChild(customList); // Добавляем созданный список изображений
//   } else {
//     console.error('Родительский элемент .image-gallery-container не найден.');
//   }
// });

// Создаем кнопку "Search"
createButton({
  elementType: 'button',
  className: 'search-button__btn button',
  href: '#',
  ariaLabel: 'Найти отель.',
  text: 'Search...',
  parentSelector: '.search-button'
});

// Создаем кнопку "Видео"
createButton({
  elementType: 'button',
  className: 'button',
  href: '#',
  ariaLabel: 'Смотреть видео.',
  text: 'Watch video',
  parentSelector: '.video-btn'
});
