export function generateHotels(hotels) {
  const listHotels = document.createElement('ul');
  hotels.forEach(hotel => {
    const itemHotel = document.createElement('li');
    const imageHotel = document.createElement('img');
    const titleHotel = document.createElement('h2');

    imageHotel.setAttribute('src', hotel.img);
    imageHotel.setAttribute('width', 300);
    imageHotel.setAttribute('class', 'image__hotel');
    titleHotel.textContent = hotel.title;
    itemHotel.appendChild(imageHotel)
    itemHotel.appendChild(titleHotel)
    listHotels.appendChild(itemHotel)
  });
  document.querySelector('main').appendChild(listHotels)
}
