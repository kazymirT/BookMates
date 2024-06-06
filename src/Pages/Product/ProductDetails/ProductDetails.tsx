import { Link } from 'react-router-dom';

import ProductDetailItem from './ProductDetailItem';
import styles from '../Product.module.scss';
import { Book } from '@/utils/fake';

const ProductDetails = ({ book }: { book: Book }) => (
  <div className={styles.book}>
    <div className={styles.info}>
      <h2>{book.title}</h2>
      <div className={styles.authors}>
        {book.authors.map((author, index) => (
          <h2 key={`${author + index}`}>{author}</h2>
        ))}
      </div>
    </div>
    <div className={styles.details}>
      <div className={styles.row}>
        <ProductDetailItem title="Мова книжки" value={book.language} />
        <ProductDetailItem title="Рік видання" value={book.year} />
      </div>
      <div className={styles.row}>
        <ProductDetailItem title="Категорія">
          <div className={styles.categories}>
            {book.categories.map((category, index) => (
              <Link
                key={`${category.label + index}`}
                className={styles.item}
                to={`/catalog/${category.slag}`}
              >
                {category.label}
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
