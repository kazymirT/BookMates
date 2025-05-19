import { type FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './CollectionCard.module.scss';
import { CollectionMain } from '@/redux/services/services.types';

const CollectionCard: FC<CollectionMain> = ({ id, image, name }) => {
  return (
    <Link to={`/collection/${id}`} className={styles.card}>
      <img
        src={image ? image : ''}
        alt={`image for ${name}`}
        width={220}
        height={200}
        loading="lazy"
      />
      <div>
        <h4>{name}</h4>
      </div>
    </Link>
  );
};

export default CollectionCard;
