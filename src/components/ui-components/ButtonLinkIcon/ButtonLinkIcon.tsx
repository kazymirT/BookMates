import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { ButtonLinkIconProps } from './ButtonLinkIcon.types';
import { Button } from '../Button/Button';

export const ButtonLinkIcon: FC<ButtonLinkIconProps> = ({
  url,
  icon,
  ...buttonProps
}) => {
  return (
    <Link to={url}>
      <Button {...buttonProps}>{icon}</Button>
    </Link>
  );
};
