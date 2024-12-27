import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from '../Product.module.scss';
import Price from '@/components/Price/Price';
import { Button } from '@/components/ui-components/Button/Button';
import {
  Position,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { ButtonLink } from '@/components/ui-components/ButtonLink/ButtonLink';
import { Icon } from '@/components/ui-components/Icons';
import { useProductControlLogic } from '@/hooks/useProductControlLogic';
import { BookById } from '@/redux/services/services.types';
interface ProductControlProps {
  book: BookById;
}

const ProductControl: FC<ProductControlProps> = ({ book }) => {
  const { t } = useTranslation();

  const { isBookInCart, handleAddToCart, handleOpenCart } =
    useProductControlLogic(book);

  return (
    <div className={styles.control}>
      <div className={styles.price}>
        <Price
          normalPrice={book.price}
          variant="product"
          discountPrice={book.discount ? book.discountPrice : undefined}
        />
        <span className={styles.is}>{t('product.available')}</span>
      </div>
      <div className={styles.btns}>
        <ButtonLink
          url="/order"
          type="button"
          size={Sizes.FullM}
          text={t('product.btn-buy')}
          variant={Variant.Basic}
          onClick={handleAddToCart}
        />
        {!isBookInCart ? (
          <Button
            type="button"
            text={t('product.btn-basket')}
            variant={Variant.Primary}
            iconPosition={Position.Left}
            size={Sizes.FullM}
            onClick={handleAddToCart}
            icon={<Icon.Cart />}
          />
        ) : (
          <div className={styles['product_in_card']}>
            <Button
              type="button"
              text={t('product.btn-in-basket')}
              variant={Variant.Basic}
              iconPosition={Position.Left}
              size={Sizes.FullM}
              onClick={handleOpenCart}
              icon={<Icon.Arrow_1 className={styles.arrow} />}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductControl;
