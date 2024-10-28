import { CSSProperties } from 'react';

export interface SliderButtonProps {
  variant: 'banner' | 'section' | 'product' | 'hit';
  arrow: 'next' | 'prev';
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
}
