// main.js
import '/public/styles/style.scss'; // Подключаем глобальные стили
import { setupCounter } from './js/counter.js';
import { initTabs } from './js/tabs.js';
import { hotels } from "./js/hotels.js";
import { initializeMenuToggle } from "./js/icon-menu.js";
import { generateHotels } from './js/generate-hotels.js';
import { createButton } from './js/buttonModule.js'; // Импортируем модуль кнопки

const counter = document.querySelector('.counter');
if (counter) {
  setupCounter(counter);
}

setTimeout(() => generateHotels(hotels), 1000);
initTabs();
initializeMenuToggle('.icon-menu', '.header'); // Передаем селектор для заголовка

// Создаем кнопку "Login"
createButton({
  elementType: 'button',
  className: 'header__button button',
  href: '#',
  ariaLabel: 'Открыть личный кабинет.',
  text: 'Login',
  parentSelector: '.header__menu'
});
