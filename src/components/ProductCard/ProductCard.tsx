import classNames from 'classnames';
import { FC, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './ProductCard.module.scss';
import { ProductCardProps } from './types';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import useFlyToCart from '@/hooks/useFlyToCart';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addGoods } from '@/redux/slices/shoppingCartSlice';
import { isFly } from '@/redux/slices/shoppingCartUiSlice';

const ProductCard: FC<ProductCardProps> = ({ data, variant }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isFlyBook = useAppSelector(isFly);
  const { flyToCart } = useFlyToCart();

  const { authors, discount, discountPrice, id, imageUrl, price, title } = data;
  const imgRef = useRef<HTMLImageElement | null>(null);

  const addItemToCart = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(
      addGoods({
        authors,
        discount,
        discountPrice,
        id,
        img: imageUrl,
        price,
        title,
      })
    );
    if (imgRef.current) {
      flyToCart(imgRef.current);
    }
  };

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
    <Link to={`/product/${id}`} className={cardClassNames} data-src={imageUrl}>
      <img
        src={imageUrl}
        alt={title}
        ref={imgRef}
        width={204}
        height={271}
        loading="lazy"
      />
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
            text={t('product-card.buy')}
            disabled={isFlyBook}
            onClick={addItemToCart}
          />
        </div>
      </div>
      {!!discount && (
        <div className={styles.sticker}>
          <span>{t('product-card.sale')}</span>
          <span>-{discount}%</span>
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
