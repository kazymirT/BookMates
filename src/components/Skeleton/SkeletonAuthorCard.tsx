import { type FC } from 'react';

import Skeleton from './components/Skeleton/Skeleton';
import styles from './Skeleton.module.scss';
import { type SkeletonAuthorCardProps } from './types';

const SkeletonAuthorCard: FC<SkeletonAuthorCardProps> = ({ cards }) => {
  return Array.from({ length: cards }).map((_, i) => (
    <div className={styles.author} key={i}>
      <Skeleton variant="subtitle-b" />
    </div>
  ));
};

export default SkeletonAuthorCard;
