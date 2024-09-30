import classNames from 'classnames';
import { FC } from 'react';

import styles from './Price.module.scss';
import { PriceProps } from './Price.type';

const Price: FC<PriceProps> = ({ normalPrice, discountPrice, variant }) => {
  const discountClassNames = classNames(
    styles.discount,
    styles[`discount-${variant}`]
  );
  const priceClassNames = classNames(styles.price, styles[`price-${variant}`]);
  return (
    <>
      {!!discountPrice ? (
        <div className={discountClassNames}>
          <p className={styles['normal-price']}>{normalPrice}</p>
          <p className={styles['discount-price']}>{discountPrice}</p>
        </div>
      ) : (
        <p className={priceClassNames}>{normalPrice}</p>
      )}
    </>
  );
};

export default Price;
