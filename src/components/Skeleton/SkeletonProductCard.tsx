import classNames from 'classnames';
import { type FC } from 'react';

import Skeleton from './components/Skeleton/Skeleton';
import styles from './Skeleton.module.scss';
import { type SkeletonProductCardProps } from './types';

const SkeletonProductCard: FC<SkeletonProductCardProps> = ({
  cards = 1,
  variant,
}) => {
  const productCardCN = classNames(styles.card, {
    [styles[`card__${variant}`]]: variant,
  });

  return Array.from({ length: cards }).map((_, i) => (
    <div className={productCardCN} key={i} aria-label="skeleton product card">
      <Skeleton variant="img" />
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <Skeleton variant="title" />
          <Skeleton variant="subtitle" />
          <Skeleton variant="price" />
        </div>
        <Skeleton variant="button" />
      </div>
    </div>
  ));
};

export default SkeletonProductCard;
