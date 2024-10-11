import { BooksListResponse } from '@/redux/services/services.types';

export interface ProductSliderProps {
  data: BooksListResponse;
  slidesPerGroup: number;
}
