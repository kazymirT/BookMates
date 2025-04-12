import { BookSeries } from '@/redux/services/author';

export interface AuthorDescriptionsProps {
  img: string;
  bio: string[];
  booksSeries: BookSeries[];
}
