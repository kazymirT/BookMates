import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { ButtonLinkProps } from './ButtonLink.types';
import { Button } from '../Button/Button';

export const ButtonLink: FC<ButtonLinkProps> = ({ url, ...buttonProps }) => {
  return (
    <Link to={url}>
      <Button {...buttonProps} />
    </Link>
  );
};
