import styles from './CartItem.module.scss';
import removeIcon from '@/assets/icons/TrashBin.svg';
import { useAppDispatch } from '@/redux/hooks';
import {
  increaseQuantity,
  decreaseQuantity,
  removePosition,
} from '@/redux/slices/shoppingCartSlice';
//import { useRemoveBookMutation } from '@/redux/services/cart';
import { type CartItem as CartItemType } from '@/redux/slices/shoppingCartSlice';

const CartItem = ({
  item: { id, img, title, authors, price, quantity },
}: {
  item: CartItemType;
}) => {
  //const [removeBook, {data}] = useRemoveBookMutation();
  const dispatch = useAppDispatch();

  const deleteBook = () => dispatch(removePosition(id));

  return (
    <div className={styles.item}>
      <div className={styles.picture}>
        <img
          src={img}
          alt="img"
          //width={'100%'}
          height={'100%'}
        />
      </div>
      <div className={styles.info}>
        <div className={`${styles.row} ${styles['first-row']}`}>
          <p className={styles.title}>{title}</p>
          <button className={styles.btn} onClick={deleteBook}>
            <img src={removeIcon} alt="remove" width={18} height={18} />
          </button>
        </div>
        <div className={`${styles.row} ${styles['second-row']}`}>
          <p>{authors.join(', ')}</p>
        </div>
        <div className={`${styles.row} ${styles['third-row']}`}>
          <span className={styles.price}>{`${price} грн`}</span>
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
