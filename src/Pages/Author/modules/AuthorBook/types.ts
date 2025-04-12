import { Book } from '@/redux/services/services.types';

export interface AuthorBookProps {
  books: Omit<Book, 'authors'>[];
  authorName: string;
  id: number;
}
