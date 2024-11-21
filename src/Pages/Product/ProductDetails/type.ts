import { BookById } from '@/redux/services/services.types';
import { Attributes } from '@/redux/services/services.types';

export interface ProductDetailsItemProps {
  link?: string;
  options: Attributes[];
  name: string;
}

export interface ProductDetailsProps {
  book: BookById;
}

export interface ProductCharacteristicsProps {
  book: BookById;
}

export interface ProductAuthorsProps {
  authors: Attributes[];
}
