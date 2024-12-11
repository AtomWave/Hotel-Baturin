//==== Модуь работы с меню (бургер)

export function initializeMenuToggle(iconMenuSelector, headerSelector) {
  const iconMenu = document.querySelector(iconMenuSelector);
  const header = document.querySelector(headerSelector);
  const navMain = header.querySelector('.menu__body'); // Получаем элемент меню из header

  if (!iconMenu || !header || !navMain) {
    console.error('Значок меню, заголовок или основной элемент навигации не найден.');
    return;
  }

  navMain.classList.remove('header--nojs');

  // Функция для обновления высоты меню и margin
  function updateMenuHeight() {
    const menuList = navMain.querySelector('.menu__list'); // Получаем список меню
    if (menuList) {
      const menuHeight = menuList.scrollHeight; // Высота списка меню
      const paddingTop = parseInt(getComputedStyle(menuList).paddingTop); // Получаем padding-top списка
      const additionalMargin = 20; // Дополнительный отступ для margin-bottom

      // Расчет margin-bottom для header
      const marginBottom = menuHeight - paddingTop + additionalMargin;

      if (header.classList.contains('menu--opened')) {
        navMain.style.height = `${menuHeight}px`; // Установка высоты в зависимости от содержимого
        header.style.marginBottom = `${marginBottom}px`; // Установка margin-bottom
      } else {
        navMain.style.height = '0px'; // Закрываем меню
        header.style.marginBottom = `${marginBottom}px`; // Устанавливаем margin-bottom перед сбросом

        // Используем setTimeout для плавного перехода
        setTimeout(() => {
          header.style.marginBottom = '0px'; // Сбрасываем margin-bottom после анимации закрытия
        }, 200); // Задержка должна соответствовать времени анимации закрытия
      }
    }
  }

  // Обработчик события клика на бургер-меню
  iconMenu.addEventListener('click', function () {
    header.classList.toggle('menu--opened'); // Переключение класса для открытия/закрытия меню
    updateMenuHeight(); // Обновление высоты и margin при открытии/закрытии меню
  });
}
