// js/menuItems.js

export const items = [
  {
    link: '#',
    text: 'Booking',
  },
  {
    link: '#',
    text: 'Facilities',
  },
  {
    link: '#',
    text: 'About Us',
  },
  {
    link: '#',
    text: 'Location',
  },
  {
    link: '#',
    text: 'Contact',
  }
];

// Опции для настройки списка
export const options = {
  containerSelector: '.menu__body', // Селектор родительского элемента nav
  listType: 'ul', // Тип списка (ul, ol, dl)
  listClass: 'menu__list list-reset', // Классы для элемента списка
  itemType: 'li', // Тип пункта списка (li, dt, dd)
  itemClass: 'menu__item', // Класс пункта списка 
  linkClass: 'menu__link', // Класс для ссылок
};
