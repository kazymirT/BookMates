import { BooksData } from '@/redux/services/services.types';

export interface SearchResultItemProps
  extends Pick<
    BooksData,
    'id' | 'title' | 'imageUrl' | 'price' | 'discount' | 'discountPrice'
  > {
  onClickItem: () => void;
}
