import sale1001 from '@/assets/images/fake/sale/sale-10-01.png';
import sale1002 from '@/assets/images/fake/sale/sale-10-02.png';
import sale1003 from '@/assets/images/fake/sale/sale-10-03.png';
import sale1004 from '@/assets/images/fake/sale/sale-10-04.png';
import sale1501 from '@/assets/images/fake/sale/sale-15-01.png';
import sale1502 from '@/assets/images/fake/sale/sale-15-02.png';
import sale1503 from '@/assets/images/fake/sale/sale-15-03.png';
import sale1504 from '@/assets/images/fake/sale/sale-15-04.png';
import sale2001 from '@/assets/images/fake/sale/sale-20-01.png';
import sale2002 from '@/assets/images/fake/sale/sale-20-02.png';
import sale2003 from '@/assets/images/fake/sale/sale-20-03.png';
import sale2004 from '@/assets/images/fake/sale/sale-20-04.png';

export type SaleBooksType = {
  title: string;
  images: string[];
  id: number;
};

export const saleBooks: SaleBooksType[] = [
  {
    title: 'Знижки 10',
    images: [sale1001, sale1002, sale1003, sale1004],
    id: 1,
  },
  {
    title: 'Знижки 15',
    images: [sale1501, sale1502, sale1503, sale1504],
    id: 2,
  },
  {
    title: 'Знижки 20',
    images: [sale2001, sale2002, sale2003, sale2004],
    id: 3,
  },
];

export const FILTERS = {
  categories: [
    { id: 1, name: 'Хіти продажів', checked: false },
    { id: 2, name: 'Вигідні пропозиції', checked: false },
    { id: 3, name: 'Книги іноземною мовою', checked: false },
    { id: 4, name: 'Вивчення мов', checked: false },
    { id: 5, name: 'Фантастика, фентезі', checked: false },
    { id: 6, name: 'Психологія і взаємини', checked: false },
    { id: 7, name: 'Саморозвиток', checked: false },
    { id: 8, name: 'Бізнес, гроші, економіка', checked: false },
    { id: 9, name: 'Дитяча література', checked: false },
    { id: 10, name: 'Біографії і мемуари', checked: false },
    { id: 11, name: 'Хоббі і дозвілля', checked: false },
    { id: 12, name: 'Художня література', checked: false },
  ],
  language: [
    { id: 1, name: 'Українська', checked: false },
    { id: 2, name: 'Англійська', checked: false },
    { id: 3, name: 'Польська', checked: false },
    { id: 4, name: 'Іспанська', checked: false },
  ],
  years: [
    { id: 1, name: '2023', checked: false },
    { id: 2, name: '2022', checked: false },
    { id: 3, name: '2021', checked: false },
    { id: 4, name: '2020', checked: false },
    { id: 5, name: '2019', checked: false },
    { id: 6, name: '2018', checked: false },
    { id: 7, name: '2015', checked: false },
    { id: 8, name: '2010', checked: false },
    { id: 9, name: '2006', checked: false },
    { id: 10, name: '1995', checked: false },
  ],
  price: [0, 1000],
};

export const clientArr = [
  { id: 1, phone: '+ 380 000 000 000', user: 'Мельник Валерія', city: 'Одеса' },
  { id: 2, phone: '+ 380 000 000 000', user: 'Мельник Валерія', city: 'Одеса' },
  { id: 3, phone: '+ 380 000 000 000', user: 'Мельник Валерія', city: 'Одеса' },
  { id: 4, phone: '+ 380 000 000 000', user: 'Мельник Валерія', city: 'Одеса' },
  { id: 5, phone: '+ 380 000 000 000', user: 'Мельник Валерія', city: 'Одеса' },
  { id: 6, phone: '+ 380 000 000 000', user: 'Мельник Валерія', city: 'Одеса' },
];

export const orderList = [
  {
    id: 10,
    address: 'Нова Пошта №35 вулиця Канатна, 83',
    status: 'Виконано',
    price: '230',
  },
  {
    id: 12,
    address: 'Нова Пошта №35 вулиця Канатна, 83',
    status: 'Виконано',
    price: '230',
  },
];
