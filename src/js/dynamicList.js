/**
 * Функция для создания динамического списка на основе массива элементов.
 * @param {Array} items - Массив объектов, представляющих пункты списка.
 * @param {Object} options - Опции для настройки списка.
 */
export function createDynamicList(items, options) {
  const {
    containerSelector,
    listType = 'ul', // Используем ul по умолчанию
    listClass = '',
    itemType = 'li', // Используем li по умолчанию
    itemClass = '', // Класс для пунктов списка
    linkClass = '', // Класс для ссылок
  } = options;

  const parentElement = document.querySelector(containerSelector);

  if (!parentElement) {
    console.error('Родительский элемент не найден.');
    return;
  }

  // Удаляем существующий список, если он есть
  const existingList = parentElement.querySelector(listType);
  if (existingList) {
    existingList.remove();
  }

  // Создаем новый контейнер для списка
  const list = document.createElement(listType);

  if (listClass) {
    list.classList.add(...listClass.split(' '));
  }

  items.forEach(item => {
    const listItem = document.createElement(itemType); // Создаем элемент пункта списка

    if (itemClass) {
      listItem.classList.add(...itemClass.split(' ')); // Добавляем класс к пункту списка
    }

    if (item.link) { // Для меню навигации
      const link = document.createElement('a');
      link.href = item.link;
      link.textContent = item.text; // Устанавливаем текст ссылки
      if (linkClass) {
        link.classList.add(...linkClass.split(' ')); // Добавляем классы к ссылке
      }
      listItem.appendChild(link); // Добавляем ссылку в пункт списка
    } else if (item.src) { // Для изображений
      const img = document.createElement('img');
      img.src = item.src; // Устанавливаем источник изображения
      img.alt = item.alt || 'Изображение'; // Устанавливаем альтернативный текст

      if (item.width) img.width = item.width; // Устанавливаем ширину изображения, если указано
      if (item.height) img.height = item.height; // Устанавливаем высоту изображения, если указано

      listItem.appendChild(img); // Добавляем изображение в пункт списка
    } else if (item.img) { // Для отелей
      const img = document.createElement('img');
      img.src = item.img;
      img.alt = item.title || 'Отель';

      if (item.width) img.width = item.width;
      if (item.height) img.height = item.height;

      listItem.appendChild(img);

      if (item.title) {
        const title = document.createElement('h2');
        title.textContent = item.title;
        listItem.appendChild(title);
      }

      if (item.subtitle) {
        const subtitle = document.createElement('p');
        subtitle.textContent = item.subtitle;
        listItem.appendChild(subtitle);
      }

      if (item.price !== undefined) {
        const price = document.createElement('span');
        price.textContent = `$${item.price}`;
        price.classList.add('hotel-price');

        listItem.appendChild(price);
      }

      if (item.rating !== undefined) {
        const rating = document.createElement('span');
        rating.textContent = `Rating: ${item.rating}`;
        rating.classList.add('hotel-rating');

        listItem.appendChild(rating);
      }
    }

    list.appendChild(listItem); // Добавляем пункт в список
  });

  parentElement.appendChild(list); // Добавляем список в родительский элемент
}
