// hotels.js

const checkPath = window.location.href;
const hasCatalog = checkPath.indexOf("pages") !== -1;

let path = '';

if (hasCatalog) {
  path = './../../'
} else {
  path = './'
}

export const hotels = [
  {
    src: `${path}public/assets/images/london.webp`,
    alt: 'Изображение отеля Danubius',
    subtitle: 'Hotel 1',
    title: 'Danubius Hotel Regents Park',
    price: 150,
    rating: 4.5,
    width: 300, // Устанавливаем ширину изображения
    height: 200, // Устанавливаем высоту изображения
    children: [
      {
        text: 'More about Hotel 1',
        link: '#more-hotel-1'
      }
    ]
  },
  {
    src: `${path}public/assets/images/london.webp`,
    alt: 'Изображение отеля The Resident Soho',
    subtitle: 'Hotel 2',
    title: 'The Resident Soho',
    price: 120,
    rating: 4.7,
    width: 300, // Устанавливаем ширину изображения
    height: 200, // Устанавливаем высоту изображения
    children: [
      {
        text: 'More about Hotel 1',
        link: '#more-hotel-1'
      }
    ]
  },
  {
    src: `${path}public/assets/images/london.webp`,
    alt: 'Изображение отеля The Resident Soho',
    subtitle: 'Hotel 3',
    title: 'London Bridge Hotel',
    price: 100,
    rating: 3.8,
    width: 300, // Устанавливаем ширину изображения
    height: 200, // Устанавливаем высоту изображения
    children: [
      {
        text: 'More about Hotel 1',
        link: '#more-hotel-1'
      }
    ]
  },
  {
    src: `${path}public/assets/images/london.webp`,
    alt: 'Изображение отеля The Resident Soho',
    subtitle: 'Hotel 2',
    title: 'The Resident Soho',
    price: 120,
    rating: 4.7,
    width: 300, // Устанавливаем ширину изображения
    height: 200, // Устанавливаем высоту изображения
  },
  {
    src: `${path}public/assets/images/london.webp`,
    alt: 'Изображение отеля The Resident Soho',
    subtitle: 'Hotel 3',
    title: 'London Bridge Hotel',
    price: 100,
    rating: 3.8,
    width: 300, // Устанавливаем ширину изображения
    height: 200, // Устанавливаем высоту изображения
  },
  {
    src: `${path}public/assets/images/london.webp`,
    alt: 'Изображение отеля The Resident Soho',
    subtitle: 'Hotel 2',
    title: 'The Resident Soho',
    price: 120,
    rating: 4.7,
    width: 300, // Устанавливаем ширину изображения
    height: 200, // Устанавливаем высоту изображения
  },
];


