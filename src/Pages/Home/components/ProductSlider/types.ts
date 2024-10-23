import { BooksListResponse } from '@/redux/services/services.types';

export interface ProductSliderProps {
  data: BooksListResponse;
  sliderCL: string;
  variant?: 'banner' | 'product' | 'section';
  slidesToScroll?: number;
}
