import classNames from 'classnames';
import { FC } from 'react';

import styles from './ProductCard.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { BooksData } from '@/redux/services/services.types';

export interface ProductCardProps {
  data: BooksData;
}
const ProductCard: FC<ProductCardProps> = ({
  data: { authors, title, imageUrl, price, discount, discountPrice },
}) => {
  const wrapperClassNames = classNames(styles.wrapper, {
    [styles['wrapper__discount']]: !!discount,
  });
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} width={204} height={271} />
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
          buttonType={ButtonType.Button}
          size={Sizes.FullS}
          variant={Variant.Basic}
          text="Купити"
        />
      </div>
      {!!discount && (
        <div className={styles.sticker}>
          <span>Акція</span>
          <span>-{discount}%</span>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
