// js/buttonModule.js

// Встраиваем стили непосредственно в JavaScript
const styles = `
.button {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 35px;
    background-color: var(--button-color); /* Используем CSS-переменную */
    text-align: center;
    text-decoration: none;
    border: none;
    cursor: pointer;
    word-wrap: break-word;
    color: var(--contrast-text-color); /* Используем CSS-переменную */
}

.button:hover {
    background-color: var(--button-hover-color); /* Используем CSS-переменную */
    color: var(--button-color); /* Цвет текста при наведении */
    transition: all 0.5s;
}

.button:focus-visible {
    outline: none;
    background-color: var(--button-hover-color); /* Используем CSS-переменную */
    color: var(--button-color); /* Цвет текста при фокусе */
}

.button:active {
    background-color: var(--button-hover-color); /* Используем CSS-переменную */
    color: var(--button-color); /* Цвет текста при нажатии */
}
`;

// Функция для создания кнопки или ссылки с параметрами
export function createButton({
  elementType = 'button', // Тип элемента ('button' или 'link')
  className,
  href = '', // URL для ссылки (если элемент - ссылка)
  type = 'button', // Тип кнопки (только для кнопки)
  ariaLabel,
  text,
  parentSelector
}) {
  // Создание элемента кнопки или ссылки
  const element = document.createElement(elementType === 'link' ? 'a' : 'button');

  if (elementType === 'link') {
    element.href = href; // Установка URL для ссылки
    element.role = 'button'; // Установка роли для доступности
    element.setAttribute('aria-label', ariaLabel); // Установка aria-label
    element.textContent = text; // Установка текста ссылки
    element.className = className; // Установка класса ссылки
    element.style.textDecoration = 'none'; // Убираем подчеркивание у ссылки
  } else {
    element.className = className; // Установка класса кнопки
    element.type = type; // Установка типа кнопки
    element.setAttribute('aria-label', ariaLabel); // Установка aria-label
    element.textContent = text; // Установка текста кнопки
  }

  // Добавление обработчика событий для элемента
  element.addEventListener('click', () => {
    alert(`Вы нажали на ${elementType}: ${text}`); // Логика для обработки клика
  });

  // Находим родительский элемент и добавляем элемент в него
  const parentElement = document.querySelector(parentSelector);
  if (parentElement) {
    parentElement.appendChild(element);
  } else {
    console.error(`Элемент с селектором "${parentSelector}" не найден.`);
  }

  // Встраиваем стили в документ без использования свойства type
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles; // Добавляем стили напрямую

  document.head.appendChild(styleSheet);
}
