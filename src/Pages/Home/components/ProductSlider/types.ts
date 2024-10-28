import { ReactNode } from 'react';

export interface ProductSliderProps {
  sliderCL: string;
  variant?: 'banner' | 'product' | 'section' | 'hit';
  slidesToScroll?: number;
  slidesToShow?: number;
  children: ReactNode;
  isArrow?: boolean;
  isDots?: boolean;
}
