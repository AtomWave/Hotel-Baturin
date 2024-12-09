// js/buttonModule.js

// Функция для создания кнопки с параметрами
export function createButton({ className, type = 'button', ariaLabel, text, parentSelector }) {
  // Создание элемента кнопки
  const button = document.createElement('button');
  button.className = className; // Установка класса кнопки
  button.type = type; // Установка типа кнопки
  button.setAttribute('aria-label', ariaLabel); // Установка aria-label
  button.textContent = text; // Установка текста кнопки

  // Добавление обработчика событий для кнопки
  button.addEventListener('click', () => {
    alert(`Вы нажали на кнопку: ${text}`); // Здесь можно добавить логику для обработки клика
  });

  // Находим родительский элемент и добавляем кнопку в него
  const parentElement = document.querySelector(parentSelector);
  if (parentElement) {
    parentElement.appendChild(button);
  } else {
    console.error(`Элемент с селектором "${parentSelector}" не найден.`);
  }

  // Подключение стилей
  import('../styles/button.scss'); // Импортируем SCSS файл
}
