// svgUtils.js

// Функция для создания SVG с указанным путем и размерами
export function createSVG(path, width, height) {
  return `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <use xlink:href="${path}"></use>
        </svg>
  `;
}

// Универсальная функция для вставки SVG в указанный элемент с заданными параметрами
export function insertInlineSVG(selector, path, width, height) {
  const element = document.querySelector(selector); // Находим элемент по селектору
  if (element) {
    element.insertAdjacentHTML('beforeend', createSVG(path, width, height)); // Вставляем иконку с заданными параметрами
  } else {
    console.error(`Element with selector '${selector}' not found.`);
  }
}
