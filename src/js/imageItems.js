// js/imageItems.js

export const imageItems = [
  {
    src: './public/assets/images/london.webp',
    alt: 'Описание изображения 1',
    width: 300,
    height: 200,
  },
  {
    src: './public/assets/images/danubius.webp',
    alt: 'Описание изображения 2',
    width: 300,
    height: 200,
  },
  {
    src: './public/assets/images/hiro.webp',
    alt: 'Описание изображения 3',
    width: 300,
    height: 200,
  },
];

// Опции для настройки списка изображений
export const imageOptions = {
  containerSelector: '.image-gallery', // Селектор родительского элемента для изображений
  listType: 'ul', // Используем ul для галереи изображений
  listClass: 'image-gallery__wraper', // Классы для контейнера
  itemType: 'li', // Используем li для каждого изображения
  itemClass: 'image-item', // Класс для пунктов списка изображений
};
