import { Book } from '@/redux/services/services.types';

export interface ProductCardProps {
  data: Book;
  variant: 'catalog' | 'slider';
}
