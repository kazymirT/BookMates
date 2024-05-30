import book1 from '@/assets/images/fake/book1.png';
import book2 from '@/assets/images/fake/book2.png';
import book3 from '@/assets/images/fake/book3.png';
import book4 from '@/assets/images/fake/book4.png';
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
import { BookCardType } from '@/components/BookCard/BookCard';

export const hitBooks: BookCardType[] = [
  {
    id: 1,
    img: book1,
    title: 'Lorem ipsum dolor sit',
    description: 'Lorem ipsum dolor sit',
    price: '21.00',
  },
  {
    id: 2,
    img: book2,
    title: 'Lorem ipsum dolor sit',
    description: 'Lorem ipsum dolor sit',
    price: '21.00',
  },
  {
    id: 3,
    img: book3,
    title: 'Lorem ipsum dolor sit',
    description: 'Lorem ipsum dolor sit',
    price: '21.00',
  },
  {
    id: 4,
    img: book4,
    title: 'Lorem ipsum dolor sit',
    description: 'Lorem ipsum dolor sit',
    price: '21.00',
  },
];

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

export const catalogBooks: BookCardType[] = [
  {
    id: 1,
    img: book1,
    title: 'Lorem ipsum dolor sit',
    description: 'Lorem ipsum dolor sit',
    price: '200',
  },
  {
    id: 2,
    img: book1,
    title: 'Lorem ipsum dolor sit',
    description: 'Lorem ipsum dolor sit',
    price: '200',
  },
  {
    id: 3,
    img: book1,
    title: 'Lorem ipsum dolor sit',
    description: 'Lorem ipsum dolor sit',
    price: '200',
  },
  {
    id: 4,
    img: book1,
    title: 'Lorem ipsum dolor sit',
    description: 'Lorem ipsum dolor sit',
    price: '200',
  },
  {
    id: 5,
    img: book1,
    title: 'Lorem ipsum dolor sit',
    description: 'Lorem ipsum dolor sit',
    price: '200',
  },
  {
    id: 6,
    img: book1,
    title: 'Lorem ipsum dolor sit',
    description: 'Lorem ipsum dolor sit',
    price: '200',
  },
  {
    id: 7,
    img: book1,
    title: 'Lorem ipsum dolor sit',
    description: 'Lorem ipsum dolor sit',
    price: '200',
  },
  {
    id: 8,
    img: book1,
    title: 'Lorem ipsum dolor sit',
    description: 'Lorem ipsum dolor sit',
    price: '200',
  },
  {
    id: 9,
    img: book1,
    title: 'Lorem ipsum dolor sit',
    description: 'Lorem ipsum dolor sit',
    price: '200',
  },
];
