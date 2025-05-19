import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './CollectionsCard.module.scss';
import { CollectionList } from '@/redux/services/collections';

const CollectionsCard: FC<CollectionList> = ({
  id,
  bookCount,
  image,
  name,
}) => {
  return (
    <Link to={`/collection/${id}`} className={styles.card}>
      <img src={image ? image : ''} alt={name} width={221} height={168} />
      <div className={styles.wrapper}>
        <h3>{name}</h3>
        <p>
          <span>{bookCount}</span>
          <span>книг</span>
        </p>
      </div>
    </Link>
  );
};

export default CollectionsCard;
