import { FC } from 'react';

import styles from './AuthorBook.module.scss';
import { AuthorBookProps } from './types';
// import HitCard from '@/Pages/Catalog/modules/HitOffers/components/HitCard/HitCard';

const AuthorBook: FC<AuthorBookProps> = ({ books }) => {
  console.log(books);
  return (
    <section className={styles.books}>
      <h3>Книги автора</h3>
      {/* {books && (
        <div>
          {books.map((book) => (
            <HitCard key={book.id} data={book} />
          ))}
        </div>
      )} */}
    </section>
  );
};

export default AuthorBook;
