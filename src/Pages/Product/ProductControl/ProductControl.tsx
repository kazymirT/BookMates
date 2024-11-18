import { useTranslation } from 'react-i18next';

import styles from '../Product.module.scss';
import Price from '@/components/Price/Price';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
  Position,
} from '@/components/ui-components/Button/constants';
import { ButtonLink } from '@/components/ui-components/ButtonLink/ButtonLink';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { BookById } from '@/redux/services/services.types';
import { toggleShowCartNotification } from '@/redux/slices/cartNotificationSlice';
//import { useAddBookMutation } from '@/redux/services/cart';
import {
  addGoods,
  goods,
  toggleOpenCart,
} from '@/redux/slices/shoppingCartSlice';

const ProductControl = ({ book }: { book: BookById }) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const goobs = useAppSelector(goods);
  const isBookInCard = goobs.some((goob) => goob.id === book?.id);
  //const [ addToCart ] = useAddBookMutation()
  const handleAddToCart = () => {
    //addToCart({bookId: 1, quantity: 1})
    if (book && !isBookInCard) {
      dispatch(
        addGoods({
          id: book.id,
          price: String(book.price),
          authors: book.authors.map((author) => author.name),
          img: book.imageUrl,
          title: book.title,
          discount: book.discount,
          discountPrice: book.discountPrice,
        })
      );
      dispatch(toggleShowCartNotification(true));
    }
  };
  const handleOpenCart = () => dispatch(toggleOpenCart(true));
  return (
    <div className={styles.control}>
      <>
        <div className={styles.price}>
          <Price
            normalPrice={book.price}
            variant="product"
            discountPrice={book.discount ? book.discountPrice : undefined}
          />
          <span className={styles.is}>Товар у наявності</span>
        </div>
        <div className={styles.btns}>
          <ButtonLink
            url="/order"
            buttonType={ButtonType.Button}
            size={Sizes.FullM}
            text={t('product.btn-buy')}
            variant={Variant.Basic}
            onClick={handleAddToCart}
          />
          {!isBookInCard ? (
            <Button
              buttonType={ButtonType.Button}
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
                buttonType={ButtonType.Button}
                text="У кошику"
                variant={Variant.Basic}
                iconPosition={Position.Left}
                size={Sizes.FullM}
                onClick={handleOpenCart}
                icon={<Icon.Arrow_1 className={styles.arrow} />}
              />
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default ProductControl;
