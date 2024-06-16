import { NavLink } from 'react-router-dom';

import styles from './HitProducts.module.scss';
import BookCard from '@/components/BookCard/BookCard';
import { useGetBooksQuery } from '@/redux/services/books';

const HitProducts = () => {
  const { data } = useGetBooksQuery({ size: '4' });
  return (
    <section className={styles.hit}>
      <div className="container">
        <div className={styles.headers}>
          <h2>Хіти продажів</h2>
          <NavLink to="catalog/bestseller">більше</NavLink>
        </div>
        <div className={styles.books}>
          {data &&
            data.content.map((book) => (
              <BookCard key={book.id} slag={'bestseller'} data={book} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default HitProducts;
