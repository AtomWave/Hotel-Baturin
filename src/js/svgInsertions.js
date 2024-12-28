// svgInsertions.js

import { insertInlineSVG } from './svgUtils.js'; // Импортируем функцию для вставки SVG

// Функция для вставки необходимых SVG
export function insertSVGIcons() {
  insertInlineSVG('.video-btn__icon', `/assets/vectors/sprite.svg#arrow-right`, 16, 20);
  insertInlineSVG('label[for="location"]', `/assets/vectors/sprite.svg#location`, 16, 20);
  insertInlineSVG('label[for="check-in"]', `/assets/vectors/sprite.svg#calendar`, 18, 20);
  insertInlineSVG('label[for="check-out"]', `/assets/vectors/sprite.svg#calendar`, 18, 20);
  insertInlineSVG('label[for="rooms-for"]', `/assets/vectors/sprite.svg#person`, 24, 24);
  insertInlineSVG('.search-button', `/assets/vectors/sprite.svg#search`, 16, 20);
}
