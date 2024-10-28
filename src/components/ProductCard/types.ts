import { BooksData } from '@/redux/services/services.types';

export interface ProductCardProps {
  data: BooksData;
  variant: 'catalog' | 'slider';
}
