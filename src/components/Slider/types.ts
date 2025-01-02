import { type ReactNode } from 'react';
import { type Settings } from 'react-slick';

export interface SliderProps extends Settings {
  sliderCL: string;
  variant?: 'banner' | 'product' | 'section' | 'hit';
  children: ReactNode;
}
