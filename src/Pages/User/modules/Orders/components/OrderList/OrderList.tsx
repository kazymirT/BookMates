import styles from './OrderList.module.scss';
import { FACE_ORDERS } from '@/Pages/User/data';

const OrderList = () => {
  return (
    <>
      {FACE_ORDERS && (
        <ul className={styles.list}>
          {FACE_ORDERS.map(({ count, id, name, price, status }) => (
            <li key={id}>
              <p className={styles.name}>{name}</p>
              <p className={styles.count}>{count} шт</p>
              <p className={styles.price}>{price} грн</p>
              <p className={styles.status} data-status={status}>
                {status}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default OrderList;
