import styles from '../Product.module.scss';
import CartIcon from '@/components/svg/cart/Cart';

const ProductControl = ({ price }: { price: number }) => (
  <div className={styles.control}>
    <p className={styles.price}>{price}</p>
    <button className={styles.cart} type="button">
      <CartIcon />
      До кошика
    </button>
    <button className={styles.buy} type="button">
      Купити зараз
    </button>
  </div>
);

export default ProductControl;
