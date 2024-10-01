import classNames from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Price.module.scss';
import { PriceProps } from './Price.type';

const Price: FC<PriceProps> = ({ normalPrice, discountPrice, variant }) => {
  const { t } = useTranslation();
  const discountClassNames = classNames(
    styles.discount,
    styles[`discount-${variant}`]
  );
  const priceClassNames = classNames(styles.price, styles[`price-${variant}`]);
  return (
    <>
      {!!discountPrice ? (
        <div className={discountClassNames}>
          <p className={styles['normal-price']}>
            {t('price', { price: normalPrice })}
          </p>
          <p className={styles['discount-price']}>
            {t('price', { price: discountPrice })}
          </p>
        </div>
      ) : (
        <p className={priceClassNames}>{t('price', { price: normalPrice })}</p>
      )}
    </>
  );
};

export default Price;
