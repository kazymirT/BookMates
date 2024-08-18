import styles from './OrderItem.module.scss';
import { type OrderItemProps } from '../order.types';

const OrderItem = ({
  data: { authors, quantity, img, price, title },
}: OrderItemProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['img-box']}>
        <img src={img} alt={title} width={63} height={91} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.authors}>{authors.join(', ')}</h3>
        </div>
        <div className={styles.prices}>
          <p className={styles.price}>{price}</p>
          <p className={styles.count}>{quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
