export function createDynamicList(items, options) {
  const {
    containerSelector,
    listType = 'ul',
    listClass = '',
    itemType = 'li',
    itemClass = '',
    linkClass = '',
  } = options;

  const parentElement = document.querySelector(containerSelector);

  if (!parentElement) {
    console.error('Родительский элемент не найден.');
    return;
  }

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
    }

    // Обработка изображений
    if (item.src) { // Если есть изображение
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt || 'Изображение'; // Используем alt из данных
      if (item.width) img.width = item.width;
      if (item.height) img.height = item.height;
      listItem.appendChild(img);

      // Добавление заголовка и других свойств
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
        price.classList.add('price'); // Общий класс для цен
        listItem.appendChild(price);
      }

      if (item.rating !== undefined) {
        const rating = document.createElement('span');
        rating.textContent = `Rating: ${item.rating}`;
        rating.classList.add('rating'); // Общий класс для рейтинга
        listItem.appendChild(rating);
      }
    }

    // Обработка вложенных элементов
    if (item.children && Array.isArray(item.children)) {
      const nestedListOptions = {
        listType: options.listType,
        listClass: options.listClass,
        itemType: options.itemType,
        itemClass: options.itemClass,
        linkClass: options.linkClass,
      };

      const nestedList = createDynamicList(item.children, nestedListOptions);
      if (nestedList) {
        listItem.appendChild(nestedList); // Добавляем вложенный список
      }
    }

    list.appendChild(listItem); // Добавляем элемент списка
  });

  parentElement.appendChild(list); // Добавляем список в родительский элемент
}
