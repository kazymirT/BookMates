/* eslint-disable no-console */
import { Icon } from '@ui_components/Icons';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import styles from './BookCard.module.scss';
import { Button } from '../ui-components/Button/Button';
import { ButtonType, Sizes, Variant } from '../ui-components/Button/constants';
import { useAppDispatch } from '@/redux/hooks';
import { BooksData } from '@/redux/services/services.types';
import { toggleShowCartNotification } from '@/redux/slices/cartNotificationSlice';
import { addGoods, toggleOpenCart } from '@/redux/slices/shoppingCartSlice';

interface Props {
  data?: BooksData;
}

const BookCard = ({ data }: Props) => {
  const dispatch = useAppDispatch();

  const handleAddToCard = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log(`додати до кошика товар ${data?.id}`);
    if (data) {
      dispatch(
        addGoods({
          authors: data.authors,
          id: data.id,
          img: data.imageUrl,
          price: String(data.price),
          title: data.title,
        })
      );
      dispatch(toggleShowCartNotification(true));
    }
  };

  const handleAddAndOpenCard = (event: React.MouseEvent) => {
    event.preventDefault();
    handleAddToCard(event);
    dispatch(toggleOpenCart(true));
  };
  return (
    <Link to={data ? `/product/${data.id}` : ''} className={styles.card}>
      <div className={styles['img-box']}>
        {data ? (
          <>
            <img
              src={data.imageUrl}
              width={265}
              height={305}
              alt={data.title}
            />
            <button
              type="button"
              className={styles.cart}
              onClick={handleAddToCard}
              aria-label="Add to card"
            >
              <Icon.Cart />
            </button>
          </>
        ) : (
          <Skeleton width={262} height={305} />
        )}
      </div>
      <div className={styles.transparent}>
        <div className={styles.content}>
          <div className={styles.text}>
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
          </div>
          {data ? (
            <Button
              buttonType={ButtonType.Button}
              size={Sizes.Medium}
              onClick={handleAddAndOpenCard}
              text="Купити"
              variant={Variant.Basic}
            />
          ) : (
            <Skeleton width={121} height={44} />
          )}
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
