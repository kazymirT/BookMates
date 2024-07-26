import book1 from '@/assets/images/fake/book1.webp';
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

export type OrderListType = {
  id: number;
  img: string;
  title: string;
  authors: string[];
  price: string;
  count: number;
};

export const ordersList = [
  {
    id: 1,
    img: book1,
    title: 'Містер Пінґвін. Втрачений скарб',
    authors: ['Алекс Т. Сміт'],
    price: '200',
    count: 1,
  },
  {
    id: 2,
    img: book1,
    title: 'Містер Пінґвін. Втрачений скарб',
    authors: ['Алекс Т. Сміт'],
    price: '300',
    count: 2,
  },
  {
    id: 3,
    img: book1,
    title: 'Містер Пінґвін. Втрачений скарб',
    authors: ['Алекс Т. Сміт'],
    price: '500',
    count: 10,
  },
  {
    id: 4,
    img: book1,
    title: 'Містер Пінґвін. Втрачений скарб',
    authors: ['Алекс Т. Сміт'],
    price: '200',
    count: 1,
  },
  {
    id: 5,
    img: book1,
    title: 'Містер Пінґвін. Втрачений скарб',
    authors: ['Алекс Т. Сміт'],
    price: '300',
    count: 2,
  },
  {
    id: 6,
    img: book1,
    title: 'Містер Пінґвін. Втрачений скарб',
    authors: ['Алекс Т. Сміт'],
    price: '500',
    count: 10,
  },
  {
    id: 7,
    img: book1,
    title: 'Містер Пінґвін. Втрачений скарб',
    authors: ['Алекс Т. Сміт'],
    price: '200',
    count: 1,
  },
  {
    id: 8,
    img: book1,
    title: 'Містер Пінґвін. Втрачений скарб',
    authors: ['Алекс Т. Сміт'],
    price: '300',
    count: 2,
  },
  {
    id: 9,
    img: book1,
    title: 'Містер Пінґвін. Втрачений скарб',
    authors: ['Алекс Т. Сміт'],
    price: '500',
    count: 10,
  },
];

export const FILTERS = {
  categories: [
    { id: 1, name: 'Хіти продажів' },
    { id: 2, name: 'Вигідні пропозиції' },
    { id: 3, name: 'Книги іноземними мовами' },
    { id: 4, name: 'Вивчення мов' },
    { id: 5, name: 'Фантастика, фентезі' },
    { id: 6, name: 'Психологія і взаємини' },
    { id: 7, name: 'Саморозвиток' },
    { id: 8, name: 'Бізнес, гроші, економіка' },
    { id: 9, name: 'Дитяча література' },
    { id: 10, name: 'Біографії і мемуари' },
    { id: 11, name: 'Хоббі і дозвілля' },
    { id: 12, name: 'Художня література' },
  ],
  language: [
    { id: 1, name: 'Українська' },
    { id: 2, name: 'Англійська' },
  ],
  years: [
    { id: 1, name: '2024' },
    { id: 2, name: '2023' },
    { id: 3, name: '2022' },
    { id: 4, name: '2021' },
    { id: 5, name: '2020' },
    { id: 6, name: '2019' },
    { id: 7, name: '2018' },
    { id: 8, name: '2017' },
    { id: 9, name: '2016' },
    { id: 10, name: '2015' },
    { id: 11, name: '2014' },
    { id: 12, name: '2013' },
    { id: 13, name: '2012' },
    { id: 14, name: '2011' },
    { id: 15, name: '2010' },
    { id: 16, name: '2009' },
    { id: 17, name: '2008' },
    { id: 18, name: '2007' },
    { id: 19, name: '2006' },
    { id: 20, name: '2005' },
    { id: 21, name: '2004' },
    { id: 22, name: '2003' },
    { id: 23, name: '2002' },
    { id: 24, name: '2001' },
  ],
};
