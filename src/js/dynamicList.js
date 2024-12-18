export function createDynamicList(items, options) {
  const {
    listType = 'ul',
    listClass = '',
    itemType = 'li',
    itemClass = '',
    linkClass = '',
  } = options;

  const list = document.createElement(listType);
  if (listClass) {
    list.classList.add(...listClass.split(' '));
  }

  items.forEach(item => {
    const listItem = document.createElement(itemType);
    if (itemClass) {
      listItem.classList.add(...itemClass.split(' '));
    }

    // Обработка ссылок
    if (item.link) {
      const link = document.createElement('a');
      link.href = item.link;
      link.textContent = item.text || 'Link'; // Используем текст по умолчанию
      if (linkClass) {
        link.classList.add(...linkClass.split(' '));
      }
      listItem.appendChild(link);
      // console.log('Добавлена ссылка:', link.textContent); // Отладочное сообщение
    }

    // Обработка изображений
    if (item.src) { // Если есть изображение
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt || 'Изображение'; // Используем alt из данных
      if (item.width) img.width = item.width;
      if (item.height) img.height = item.height;
      listItem.appendChild(img);

      // console.log('Добавлено изображение:', img.src); // Отладочное сообщение

      // Добавление заголовка и других свойств
      if (item.title) {
        const title = document.createElement('h2');
        title.textContent = item.title;
        listItem.appendChild(title);
        // console.log('Добавлен заголовок:', title.textContent); // Отладочное сообщение
      }

      if (item.subtitle) {
        const subtitle = document.createElement('p');
        subtitle.textContent = item.subtitle;
        listItem.appendChild(subtitle);
        // console.log('Добавлено подзаголовок:', subtitle.textContent); // Отладочное сообщение
      }

      if (item.price !== undefined) {
        const price = document.createElement('span');
        price.textContent = `$${item.price}`;
        price.classList.add('price'); // Общий класс для цен
        listItem.appendChild(price);
        // console.log('Добавлена цена:', price.textContent); // Отладочное сообщение
      }

      if (item.rating !== undefined) {
        const rating = document.createElement('span');
        rating.textContent = `Rating: ${item.rating}`;
        rating.classList.add('rating'); // Общий класс для рейтинга
        listItem.appendChild(rating);
        // console.log('Добавлен рейтинг:', rating.textContent); // Отладочное сообщение
      }
    }

    // Обработка вложенных элементов
    if (item.children && Array.isArray(item.children)) {
      console.log('Обрабатываем вложенные элементы:', item.children); // Отладочное сообщение

      const nestedListOptions = {
        listType: 'ul', // Создаем вложенный список типа ul
        listClass: '',   // Класс можно оставить пустым или задать конкретный
        itemType: options.itemType,
        itemClass: options.itemClass,
        linkClass: options.linkClass,
      };

      const nestedList = createDynamicList(item.children, nestedListOptions); // Создаем вложенный список

      // console.log('Созданный вложенный список:', nestedList); // Отладочное сообщение

      if (nestedList) {
        listItem.appendChild(nestedList); // Добавляем вложенный список в текущий элемент списка
        console.log('Вложенный список добавлен к элементу:', item.title || item.subtitle); // Отладочное сообщение
      } else {
        // console.warn('Вложенный список не был создан для элемента:', item); // Отладочное сообщение
      }
    }

    list.appendChild(listItem); // Добавляем элемент списка
  });

  return list; // Возвращаем созданный список вместо добавления его в родительский элемент здесь
}
