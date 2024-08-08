import { PropsWithChildren } from 'react';
import Skeleton from 'react-loading-skeleton';

import ProductDetailItems from './ProductDetailItems';
import styles from '../Product.module.scss';
import { BookById } from '@/redux/services/services.types';

export function InlineWrapperWithMargin({
  children,
}: PropsWithChildren<unknown>) {
  return <span style={{ marginRight: '0.75rem' }}>{children}</span>;
}

const ProductDetails = ({ book }: { book?: BookById }) => {
  return (
    <div className={styles.book}>
      <div className={styles.info}>
        <h2>{book ? book.title : <Skeleton />}</h2>
        <div className={styles.authors}>
          <h2>
            {book ? (
              book.authors.join(', ')
            ) : (
              <Skeleton containerClassName="flex-1" width={588} />
            )}
          </h2>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.row}>
          <ProductDetailItems
            link="/catalog?language="
            options={book?.languages}
            title="Мова книжки"
          />
          <ProductDetailItems
            link="/catalog?years="
            options={[String(book?.year)]}
            title="Рік видання"
          />
        </div>
        <div className={styles.row}>
          <ProductDetailItems
            link="/catalog?categories="
            options={book?.categories.map((category) => category.name)}
            title="Категорія"
          />
        </div>
      </div>
      <div className={styles.description}>
        <h3>Короткий опис</h3>
        <p>{book ? book.description : <Skeleton count={5} />}</p>
      </div>
    </div>
  );
};
export default ProductDetails;
