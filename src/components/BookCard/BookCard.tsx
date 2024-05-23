import styles from './BookCard.module.scss';

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
      </div>
      <div className={styles.content}>
        <div className={styles.headers}>
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <button>купити</button>
    </div>
  );
};

export default BookCard;
