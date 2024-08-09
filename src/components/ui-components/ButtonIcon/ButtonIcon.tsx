import type { FC } from 'react';

import { ButtonIconProps } from './ButtonIcon.types';
import { Button } from '../Button/Button';

export const ButtonIcon: FC<ButtonIconProps> = ({ icon, ...buttonProps }) => {
  return <Button {...buttonProps}>{icon}</Button>;
};
