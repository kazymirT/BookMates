import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './HitCard.module.scss';
import { HitCardProps } from './types';

const HitCard: FC<HitCardProps> = ({
  data: { authors, title, imageUrl, discount, discountPrice, price },
}) => {
  return (
    <Link to={''} className={styles.card}>
      <img src={imageUrl} alt={title} width={129} height={160} />
      <div className={styles.wrapper}>
        <h3>{title}</h3>
        <div className={styles.content}>
          <h4>{authors.join(', ')}</h4>
          <div className={styles.price}>
            <p className={styles['normal-price']}>
              <span className={styles.price}>{price} грн</span>
              <span className={styles.discount}>-{discount}%</span>
            </p>
            <p className={styles['discount-price']}>{discountPrice} грн</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HitCard;
