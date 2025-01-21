import classNames from 'classnames';
import { type FC } from 'react';

import Skeleton from './components/Skeleton/Skeleton';
import styles from './Skeleton.module.scss';
import { type SkeletonCategoryProps } from './types';

const SkeletonCategory: FC<SkeletonCategoryProps> = ({
  variant = 'catalog',
}) => {
  const categoryCN = classNames(styles.category, {
    [styles[`category__${variant}`]]: variant,
  });
  return Array.from({ length: 12 }).map((_, i) => (
    <div className={categoryCN} key={i} aria-label="skeleton category">
      <Skeleton variant="category" />
    </div>
  ));
};

export default SkeletonCategory;
