import { Book } from '@/redux/services/services.types';

export interface SearchResultItemProps {
  book: Omit<Book, 'authors' | 'isNew'>;
  onClickItem: () => void;
}
