//==== Модуь работы с меню (бургер)

export function initializeMenuToggle(iconMenuSelector, headerSelector, mainSelector) {
  const iconMenu = document.querySelector(iconMenuSelector);
  const header = document.querySelector(headerSelector);
  const main = document.querySelector(mainSelector); // Получаем элемент main
  const navMain = header.querySelector('.menu__body'); // Получаем элемент меню из header

  if (!iconMenu || !header || !navMain || !main) {
    console.error('Значок меню, заголовок, основной элемент навигации или основной блок не найден.');
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
      const marginBottomForHeader = menuHeight - paddingTop + additionalMargin;

      if (header.classList.contains('menu--opened')) {
        navMain.style.height = `${menuHeight}px`; // Установка высоты в зависимости от содержимого
        header.style.marginBottom = `${marginBottomForHeader}px`; // Установка margin-bottom у header
      } else {
        navMain.style.height = '0px'; // Закрываем меню
        header.style.marginBottom = `${marginBottomForHeader}px`; // Устанавливаем margin-bottom перед сбросом

        // Используем requestAnimationFrame для плавного перехода без задержки
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            header.style.marginBottom = '0px'; // Сбрасываем margin-bottom сразу после анимации закрытия
          });
        });
      }
    }
  }

  // Обработчик события клика на бургер-меню
  iconMenu.addEventListener('click', function () {
    header.classList.toggle('menu--opened'); // Переключение класса для открытия/закрытия меню
    updateMenuHeight(); // Обновление высоты и margin при открытии/закрытии меню
  });
}
