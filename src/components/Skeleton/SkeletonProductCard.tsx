import { type FC } from 'react';

import Skeleton from './components/Skeleton/Skeleton';
import styles from './Skeleton.module.scss';
import { type SkeletonProductCardProps } from './types';

const SkeletonProductCard: FC<SkeletonProductCardProps> = () => {
  return (
    <div className={styles.productCard}>
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
  );
};

export default SkeletonProductCard;
