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
