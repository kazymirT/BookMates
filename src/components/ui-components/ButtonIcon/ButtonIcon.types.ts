import { ReactNode } from 'react';

import { ButtonProps } from '../Button/Button.types';
import { Position } from '../Button/constants';

export interface ButtonIconProps extends ButtonProps {
  icon: ReactNode;
  iconPosition: Position;
}
