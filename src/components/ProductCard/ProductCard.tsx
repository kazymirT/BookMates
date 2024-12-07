import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './ProductCard.module.scss';
import { ProductCardProps } from './types';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';

const ProductCard: FC<ProductCardProps> = ({
  data: { authors, id, title, imageUrl, price, discount, discountPrice },
  variant,
}) => {
  const cardClassNames = classNames(styles.card, {
    [styles['card__discount']]: !!discount,
    [styles['card__overlay']]: title.length > 22,
    [styles[`card__${variant}`]]: variant,
  });
  const wrapperClassNames = classNames(styles.wrapper, {
    [styles['wrapper__shadow']]: title.length > 22,
  });
  //23
  return (
    <Link to={`/product/${id}`} className={cardClassNames}>
      <img src={imageUrl} alt={title} width={204} height={271} loading="lazy" />
      <div className={styles.transparent}>
        <div className={wrapperClassNames}>
          <div className={styles.content}>
            <div className={styles['title-wrapper']}>
              <h3 className={styles.title}>{title}</h3>
              <h3 className={styles.author}>{authors.join(', ')}</h3>
            </div>
            <div className={styles.price}>
              {discount ? (
                <div className={styles['discount-price']}>
                  <p className={styles.discount}>
                    <span className={styles.price}>{price}</span>
                    <span className={styles.discount}>-{discount}%</span>
                  </p>
                  <p className={styles.price}>{discountPrice}</p>
                </div>
              ) : (
                <span className={styles['normal-price']}>{price}</span>
              )}
            </div>
          </div>
          <Button
            type="button"
            size={Sizes.Card}
            variant={Variant.Card}
            text="Купити"
          />
        </div>
      </div>
      {!!discount && (
        <div className={styles.sticker}>
          <span>Акція</span>
          <span>-{discount}%</span>
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
