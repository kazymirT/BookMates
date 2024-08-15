import Skeleton from 'react-loading-skeleton';

import styles from '../Product.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
  Position,
} from '@/components/ui-components/Button/constants';
import { ButtonLink } from '@/components/ui-components/ButtonLink/ButtonLink';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch } from '@/redux/hooks';
import { BookById } from '@/redux/services/services.types';
import { toggleShowCartNotification } from '@/redux/slices/cartNotificationSlice';
//import { useAddBookMutation } from '@/redux/services/cart';
import { addGoods } from '@/redux/slices/shoppingCartSlice';

const ProductControl = ({ book }: { book: BookById | undefined }) => {
  const dispatch = useAppDispatch();

  //const [ addToCart ] = useAddBookMutation()
  const handleAddToCart = () => {
    //addToCart({bookId: 1, quantity: 1})
    if (book) {
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
  return (
    <div className={styles.control}>
      {book && book.price ? (
        <>
          <p className={styles.price}>{book.price}</p>
          <div className={styles.btns}>
            <ButtonLink
              url="/order"
              buttonType={ButtonType.Button}
              size={Sizes.ExtraLarge}
              text="Купити зараз"
              variant={Variant.Basic}
              onClick={handleAddToCart}
            />
            <Button
              buttonType={ButtonType.Button}
              text="До кошика"
              variant={Variant.Primary}
              iconPosition={Position.Left}
              size={Sizes.Large}
              onClick={handleAddToCart}
              icon={<Icon.Cart />}
            />
          </div>
        </>
      ) : (
        <Skeleton width={218} height={48} count={3} />
      )}
    </div>
  );
};

export default ProductControl;
