import { PropsWithChildren } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import ProductDetailItem from './ProductDetailItem';
import styles from '../Product.module.scss';
import { BookById } from '@/redux/services/services.types';

export function InlineWrapperWithMargin({
  children,
}: PropsWithChildren<unknown>) {
  return <span style={{ marginRight: '0.75rem' }}>{children}</span>;
}

const ProductDetails = ({ book }: { book?: BookById }) => (
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
        <ProductDetailItem title="Мова книжки" value={book?.language} />
        <ProductDetailItem title="Рік видання" value={book?.year} />
      </div>
      <div className={styles.row}>
        <ProductDetailItem title="Категорія">
          <div className={styles.categories}>
            {book ? (
              book.categories.map((category) => (
                <Link
                  key={category.id}
                  className={styles.item}
                  to={`/catalog/${category.id}`}
                >
                  {category.name}
                </Link>
              ))
            ) : (
              <Skeleton
                containerClassName="flex-1"
                width={155}
                height={37}
                count={3}
                inline
                wrapper={InlineWrapperWithMargin}
              />
            )}
          </div>
        </ProductDetailItem>
      </div>
    </div>
    <div className={styles.description}>
      <h3>Короткий опис</h3>
      <p>{book ? book.description : <Skeleton count={5} />}</p>
    </div>
  </div>
);
export default ProductDetails;
