import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './CollectionsCard.module.scss';
import { CollectionsProps } from './types';

const CollectionsCard: FC<CollectionsProps> = ({ id, title, img }) => {
  return (
    <Link to={`/catalog?categories=${id}&page=1`} className={styles.card}>
      <img src={img} alt={title} width={221} height={200} />
      <div className={styles.wrapper}>
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default CollectionsCard;
