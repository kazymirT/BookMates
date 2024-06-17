/* eslint-disable no-console */
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import styles from './BookCard.module.scss';
import cart from '@/assets/icons/cart.svg';
import book1 from '@/assets/images/fake/book1.png';
import { BooksData } from '@/redux/services/services.types';

interface Props {
  data?: BooksData;
}

const BookCard = ({ data }: Props) => {
  const handleAddAndOpenCard = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log(`додати до кошика товар ${data?.id} і відкрити кошик`);
  };
  const handleAddToCard = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log(`додати до кошика товар ${data?.id}`);
  };

  return (
    <Link to={data ? `/product/${data.id}` : ''} className={styles.card}>
      <div className={styles['img-box']}>
        {data ? (
          <>
            <img
              src={!data.image ? book1 : data.image.contentType}
              alt={data.title}
            />
            <button
              type="button"
              className={styles.cart}
              onClick={handleAddToCard}
              aria-label="Add to card"
            >
              <img src={cart} width={24} height={24} />
            </button>
          </>
        ) : (
          <Skeleton width={262} height={305} />
        )}
      </div>
      <div className={styles.transparent}>
        <div className={styles.content}>
          <div className={styles.headers}>
            {data ? (
              <>
                <h3>{data.title}</h3>
                <p>{data.price}</p>
              </>
            ) : (
              <Skeleton
                containerClassName="flex-1"
                width={119}
                height={19}
                count={2}
                inline
              />
            )}
          </div>
          <p className={styles.description}>
            {data ? data.authors.join(', ') : <Skeleton />}
          </p>
          {data ? (
            <button
              type="button"
              onClick={handleAddAndOpenCard}
              className={styles.buy}
              aria-label="Buy now"
            >
              купити
            </button>
          ) : (
            <Skeleton width={121} height={44} />
          )}
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
