import styles from './OrderItem.module.scss';
import { type OrderItemProps } from '../order.types';
import Price from '@/components/Price/Price';

const OrderItem = ({
  data: { authors, quantity, img, price, title, discount, discountPrice },
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
          <Price
            normalPrice={Number(price)}
            variant="order"
            discountPrice={discount ? discountPrice : undefined}
          />
          <p className={styles.count}>{quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
