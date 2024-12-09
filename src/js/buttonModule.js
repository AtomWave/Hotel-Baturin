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

  // Встраиваем стили в документ
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;

  document.head.appendChild(styleSheet);
}
