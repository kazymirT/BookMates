import styles from './CartItem.module.scss';
import Price from '@/components/Price/Price';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch } from '@/redux/hooks';
import {
  increaseQuantity,
  decreaseQuantity,
} from '@/redux/slices/shoppingCartSlice';
//import { useRemoveBookMutation } from '@/redux/services/cart';
import { type CartItem as CartItemType } from '@/redux/slices/shoppingCartSlice';

const CartItem = ({
  item: { id, img, title, authors, price, quantity, discount, discountPrice },
  handleDeleteItem,
}: {
  item: CartItemType;
  handleDeleteItem: (id: number) => void;
}) => {
  //const [removeBook, {data}] = useRemoveBookMutation();
  const dispatch = useAppDispatch();
  const deleteBook = () => handleDeleteItem(id);
  return (
    <div className={styles.item}>
      <div className={styles.picture}>
        <img src={img} alt="img" width={63} height={91} />
      </div>
      <div className={styles.info}>
        <div className={`${styles.row} ${styles['first-row']}`}>
          <p className={styles.title}>{title}</p>
          <button className={styles.btn} onClick={deleteBook}>
            <Icon.Remove width="18" height="18" />
          </button>
        </div>
        <div className={`${styles.row} ${styles['second-row']}`}>
          <p>{authors.join(', ')}</p>
        </div>
        <div className={`${styles.row} ${styles['third-row']}`}>
          <Price
            normalPrice={Number(price)}
            variant="cart"
            discountPrice={discount ? discountPrice : undefined}
          />
          <div className={styles.amount}>
            <button onClick={() => dispatch(decreaseQuantity(id))}>-</button>
            <div className={styles.value}>{quantity}</div>
            <button onClick={() => dispatch(increaseQuantity(id))}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
