import { NavLink } from 'react-router-dom';

import styles from './HitProducts.module.scss';
import BookCard from '@/components/BookCard/BookCard';
import { hitBooks } from '@/utils/fake';

const HitProducts = () => {
  return (
    <section className={styles.hit}>
      <div className="container">
        <div className={styles.headers}>
          <h2>Хіти продажів</h2>
          <NavLink to="catalog/bestseller">більше</NavLink>
        </div>
        <div className={styles.books}>
          {hitBooks &&
            hitBooks.map((book) => (
              <BookCard key={book.id} slag={'bestseller'} data={book} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default HitProducts;
