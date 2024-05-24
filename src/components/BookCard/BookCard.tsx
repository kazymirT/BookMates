import styles from './BookCard.module.scss';
import cart from '@/assets/icons/cart.svg';

export type BookCardType = {
  id: number;
  img: string;
  title: string;
  description: string;
  price: string;
};

interface Props {
  data: BookCardType;
}

const BookCard = ({ data: { img, title, description, price } }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles['img-box']}>
        <img src={img} alt={title} />
        <button type="button" className={styles.cart}>
          <img src={cart} width={24} height={24} />
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.headers}>
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <button className={styles.buy}>купити</button>
    </div>
  );
};

export default BookCard;
