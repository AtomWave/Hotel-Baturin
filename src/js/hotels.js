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
    img: `${path}public/assets/images/london.webp`,
    subtitle: 'Hotel 1',
    title: 'Danubius Hotel Regents Park',
    price: 150,
    rating: 4.5,
  },
  {
    img: `${path}public/assets/images/london.webp`,
    subtitle: 'Hotel 2',
    title: 'The Resident Soho',
    price: 120,
    rating: 4.7,
  },
  {
    img: `${path}public/assets/images/london.webp`,
    subtitle: 'Hotel 3',
    title: 'London Bridge Hotel',
    price: 100,
    rating: 3.8,
  },
  {
    img: `${path}public/assets/images/london.webp`,
    subtitle: 'Hotel 2',
    title: 'The Resident Soho',
    price: 120,
    rating: 4.7,
  },
  {
    img: `${path}public/assets/images/london.webp`,
    subtitle: 'Hotel 3',
    title: 'London Bridge Hotel',
    price: 100,
    rating: 3.8,
  },
  {
    img: `${path}public/assets/images/london.webp`,
    subtitle: 'Hotel 2',
    title: 'The Resident Soho',
    price: 120,
    rating: 4.7,
  },
  {
    img: `${path}public/assets/images/london.webp`,
    subtitle: 'Hotel 3',
    title: 'London Bridge Hotel',
    price: 100,
    rating: 3.8,
  },
  {
    img: `${path}public/assets/images/london.webp`,
    subtitle: 'Hotel 2',
    title: 'The Resident Soho',
    price: 120,
    rating: 4.7,
  },
  {
    img: `${path}public/assets/images/london.webp`,
    subtitle: 'Hotel 3',
    title: 'London Bridge Hotel',
    price: 100,
    rating: 3.8,
  },
  {
    img: `${path}public/assets/images/london.webp`,
    subtitle: 'Hotel 2',
    title: 'The Resident Soho',
    price: 120,
    rating: 4.7,
  },
  {
    img: `${path}public/assets/images/london.webp`,
    subtitle: 'Hotel 3',
    title: 'London Bridge Hotel',
    price: 100,
    rating: 3.8,
  },
]
