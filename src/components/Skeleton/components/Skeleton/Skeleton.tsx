import classNames from 'classnames';
import { type FC } from 'react';

import styles from './Skeleton.module.scss';
import { type SkeletonProps } from './types';

const Skeleton: FC<SkeletonProps> = ({ variant }) => {
  const skeletonCN = classNames(styles.skeleton, {
    [styles[`skeleton__${variant}`]]: variant,
    [styles['animation-pulse']]: true,
  });
  return <div className={skeletonCN}></div>;
};

export default Skeleton;
