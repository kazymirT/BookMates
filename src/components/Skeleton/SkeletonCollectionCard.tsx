import { type FC } from 'react';

import Skeleton from './components/Skeleton/Skeleton';
import styles from './Skeleton.module.scss';
import { type SkeletonCollectionCardProps } from './types';

const SkeletonCollectionCard: FC<SkeletonCollectionCardProps> = ({ cards }) => {
  return Array.from({ length: cards }).map((_, i) => (
    <div className={styles.collection} key={i}>
      <Skeleton variant="title-c" />
    </div>
  ));
};

export default SkeletonCollectionCard;
