import { NavLink } from 'react-router-dom';

import styles from './HitProducts.module.scss';
import BookCard from '@/components/BookCard/BookCard';
import { useGetBooksQuery } from '@/redux/services/books';
import { BooksData } from '@/redux/services/services.types';

const HitProducts = () => {
  const { data: books, isLoading } = useGetBooksQuery({
    size: '4',
    categoryId: '2',
  });
  const data = (
    books
      ? books.content
      : Array.from({ length: 4 }, (_, index) => ({ id: index }))
  ) as BooksData[];

  return (
    <section className={styles.hit}>
      <div className="container">
        <div className={styles.headers}>
          <h2>Хіти продажів</h2>
          <NavLink to="catalog/2">більше</NavLink>
        </div>

        <div className={styles.books}>
          {data.map((book) => (
            <BookCard key={book.id} data={!isLoading ? book : undefined} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HitProducts;
