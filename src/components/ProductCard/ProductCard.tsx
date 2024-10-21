import classNames from 'classnames';
import { FC, useRef } from 'react';
import { Link } from 'react-router-dom';

import styles from './ProductCard.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import useFlyToCart from '@/hooks/useFlyToCart';
import { useAppDispatch } from '@/redux/hooks';
import { BooksData } from '@/redux/services/services.types';
import { addGoods } from '@/redux/slices/shoppingCartSlice';

export interface ProductCardProps {
  data: BooksData;
}
const ProductCard: FC<ProductCardProps> = ({ data }) => {
  const { authors, discount, discountPrice, id, imageUrl, price, title } = data;
  const dispatch = useAppDispatch();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const { flyToCart } = useFlyToCart();
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
  });
  const wrapperClassNames = classNames(styles.wrapper, {
    [styles['wrapper__shadow']]: title.length > 22,
  });
  //23
  return (
    <Link to={`/product/${id}`} className={cardClassNames} data-src={imageUrl}>
      <img src={imageUrl} alt={title} ref={imgRef} width={204} height={271} />
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
            buttonType={ButtonType.Button}
            size={Sizes.Card}
            variant={Variant.Card}
            text="Купити"
            onClick={addItemToCart}
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
