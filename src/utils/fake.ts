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
