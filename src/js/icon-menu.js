//==== Модуь работы с меню (бургер)

// menuToggle.js

export function initializeMenuToggle(iconMenuSelector, navMainSelector) {
  const iconMenu = document.querySelector(iconMenuSelector);
  const navMain = document.querySelector(navMainSelector);

  if (!iconMenu || !navMain) {
    console.error('Значок меню или основной элемент навигации не найден.');
    return;
  }

  navMain.classList.remove('header--nojs');

  iconMenu.addEventListener('click', function () {
    if (navMain.classList.contains('menu--opened')) {
      navMain.classList.remove('menu--opened');
      navMain.classList.add('menu--closed');
    } else {
      navMain.classList.remove('menu--closed');
      navMain.classList.add('menu--opened');
    }
  });
}
