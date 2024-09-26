import Skeleton from 'react-loading-skeleton';

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

const ProductControl = ({ book }: { book: BookById | undefined }) => {
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
          authors: book.authors,
          img: book.imageUrl,
          title: book.title,
        })
      );
      dispatch(toggleShowCartNotification(true));
    }
  };
  const handleOpenCart = () => dispatch(toggleOpenCart(true));
  const discount = 300;
  return (
    <div className={styles.control}>
      {book && book.price ? (
        <>
          <Price
            normalPrice={book.price}
            variant="product"
            discountPrice={discount}
          />
          <div className={styles.btns}>
            <ButtonLink
              url="/order"
              buttonType={ButtonType.Button}
              size={Sizes.ExtraLarge}
              text="Купити зараз"
              variant={Variant.Basic}
              onClick={handleAddToCart}
            />
            {!isBookInCard ? (
              <Button
                buttonType={ButtonType.Button}
                text="До кошика"
                variant={Variant.Primary}
                iconPosition={Position.Left}
                size={Sizes.Large}
                onClick={handleAddToCart}
                icon={<Icon.Cart />}
              />
            ) : (
              <Button
                buttonType={ButtonType.Button}
                text="У кошику"
                variant={Variant.Basic}
                iconPosition={Position.Left}
                size={Sizes.FullS}
                onClick={handleOpenCart}
                icon={<Icon.Arrow_1 className={styles.arrow} />}
              />
            )}
          </div>
        </>
      ) : (
        <Skeleton width={218} height={48} count={3} />
      )}
    </div>
  );
};

export default ProductControl;
