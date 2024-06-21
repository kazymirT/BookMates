import Skeleton from 'react-loading-skeleton';

import styles from '../Product.module.scss';
import CartIcon from '@/components/svg/cart/Cart';
import { useAppDispatch } from '@/redux/hooks';
import { toggleShowCartNotification } from '@/redux/slices/cartNotificationSlice';
import { toggleModal } from '@/redux/slices/modalSlice';

const ProductControl = ({ price }: { price?: number }) => {
  const dispatch = useAppDispatch();
  const handleAddCart = () => {
    dispatch(toggleShowCartNotification(true));
  };
  const handleOpenOrderSuccess = () =>
    dispatch(toggleModal({ openedModalType: 'order-success' }));

  return (
    <div className={styles.control}>
      {price ? (
        <>
          <p className={styles.price}>{price}</p>
          <button className={styles.cart} type="button" onClick={handleAddCart}>
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
