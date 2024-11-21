import { FC } from 'react';

import styles from '../Pagination.module.scss';
import { PaginationButtonProps } from '../types';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';

const PaginationButton: FC<PaginationButtonProps> = ({
  page,
  isActive,
  onClick,
}) => (
  <li className={isActive ? styles.active : undefined}>
    <Button
      buttonType={ButtonType.Button}
      size={Sizes.Pagination}
      variant={Variant.Pagination}
      text={`${page}`}
      onClick={onClick}
    />
  </li>
);

export default PaginationButton;
