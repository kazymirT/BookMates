import { ReactNode } from 'react';

import { Position, Sizes, Variant } from './constants';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  size: Sizes;
  text?: string;
  icon?: ReactNode;
  iconPosition?: Position;
  className?: string;
}
