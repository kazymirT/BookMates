import styles from '../Product.module.scss';
import CartIcon from '@/components/svg/cart/Cart';
import { useAppDispatch } from '@/redux/hooks';
import { toggleShowCartNotification } from '@/redux/slices/cartNotificationSlice';

const ProductControl = ({ price }: { price: number }) => {
  const dispatch = useAppDispatch();
  const handleAddCart = () => {
    dispatch(toggleShowCartNotification(true));
  };
  return (
    <div className={styles.control}>
      <p className={styles.price}>{price}</p>
      <button className={styles.cart} type="button" onClick={handleAddCart}>
        <CartIcon />
        До кошика
      </button>
      <button className={styles.buy} type="button">
        Купити зараз
      </button>
    </div>
  );
};

export default ProductControl;
