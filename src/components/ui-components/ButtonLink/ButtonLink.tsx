import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { ButtonLinkProps } from './ButtonLink.types';
import { Button } from '../Button/Button';

export const ButtonLink: FC<ButtonLinkProps> = ({
  url,
  testId,
  ...buttonProps
}) => {
  return (
    <Link to={url} data-testid={testId}>
      <Button {...buttonProps} />
    </Link>
  );
};
