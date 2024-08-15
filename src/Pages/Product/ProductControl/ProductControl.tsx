import Skeleton from 'react-loading-skeleton';

import styles from '../Product.module.scss';
import CartIcon from '@/components/svg/cart/Cart';
import { useAppDispatch } from '@/redux/hooks';
import { BookById } from '@/redux/services/services.types';
import { toggleShowCartNotification } from '@/redux/slices/cartNotificationSlice';
import { toggleModal } from '@/redux/slices/modalSlice';
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
          img: book.image?.contentType || '',
          title: book.title,
        })
      );
      dispatch(toggleShowCartNotification(true));
    }
  };
  const handleOpenOrderSuccess = () =>
    dispatch(toggleModal({ openedModalType: 'order-success' }));

  return (
    <div className={styles.control}>
      {book && book.price ? (
        <>
          <p className={styles.price}>{book.price}</p>
          <button
            className={styles.cart}
            type="button"
            onClick={handleAddToCart}
          >
            <CartIcon />
            До кошика
          </button>
          <button
            className={styles.buy}
            type="button"
            onClick={handleOpenOrderSuccess}
          >
            Купити зараз
          </button>
        </>
      ) : (
        <Skeleton width={218} height={48} count={3} />
      )}
    </div>
  );
};

export default ProductControl;
