import { Link } from 'react-router-dom';

import ProductDetailItem from './ProductDetailItem';
import styles from '../Product.module.scss';
import { BookById } from '@/redux/services/services.types';

const ProductDetails = ({ book }: { book: BookById }) => (
  <div className={styles.book}>
    <div className={styles.info}>
      <h2>{book.title}</h2>
      <div className={styles.authors}>{book.authors.join(', ')}</div>
    </div>
    <div className={styles.details}>
      <div className={styles.row}>
        <ProductDetailItem title="Мова книжки" value={book.language} />
        <ProductDetailItem title="Рік видання" value={book.year} />
      </div>
      <div className={styles.row}>
        <ProductDetailItem title="Категорія">
          <div className={styles.categories}>
            {book.categories.map((category) => (
              <Link
                key={category.id}
                className={styles.item}
                to={`/catalog/${category.id}`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </ProductDetailItem>
      </div>
    </div>
    <div className={styles.description}>
      <h3>Короткий опис</h3>
      <p>{book.description}</p>
    </div>
  </div>
);
export default ProductDetails;
