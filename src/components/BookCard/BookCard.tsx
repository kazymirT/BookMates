import { NavLink } from 'react-router-dom';

import styles from './BookCard.module.scss';
import cart from '@/assets/icons/cart.svg';
import book1 from '@/assets/images/fake/book1.png';
import { BooksData } from '@/redux/services/services.types';

interface Props {
  data: BooksData;
  slag?: string;
}

const BookCard = ({
  data: { id, image, title, authors, price },
  slag,
}: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles['img-box']}>
        <img src={!image ? book1 : image.contentType} alt={title} />
        <button type="button" className={styles.cart}>
          <img src={cart} width={24} height={24} />
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.headers}>
          <h3>{title.slice(0, 23)}</h3>
          {/* <h3>{title}</h3> */}
          <p>{price}</p>
        </div>
        <p className={styles.description}>
          {authors?.length ? authors[0] : ''}
        </p>
      </div>
      <NavLink
        to={{
          pathname: `${slag ? `/catalog/${slag}` : '/catalog'}/product/${id}`,
        }}
        className={styles.buy}
      >
        купити
      </NavLink>
    </div>
  );
};

export default BookCard;
