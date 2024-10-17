import { ORDER_STATUS } from './constants';

export const FILTERS = {
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

export const ORDER_LIST = [
  {
    orderId: '12345',
    userId: '12345',
    book: 'Містер Пінґвін. Втрачений скарб. Алекс Т. Сміт',
    quality: '11',
    price: '240',
    status: ORDER_STATUS.Completed,
  },
  {
    orderId: '22345',
    userId: '22345',
    book: 'Містер Пінґвін. Втрачений скарб. Алекс Т. Сміт',
    quality: '11',
    price: '240',
    status: ORDER_STATUS.Delivered,
  },
  {
    orderId: '32345',
    userId: '42345',
    book: 'Містер Пінґвін. Втрачений скарб. Алекс Т. Сміт',
    quality: '11',
    price: '240',
    status: ORDER_STATUS.Pending,
  },
];
