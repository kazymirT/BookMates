import { FC } from 'react';

import styles from './AuthorBook.module.scss';
import { AuthorBookProps } from './types';
import HitCard from '@/Pages/Catalog/modules/HitOffers/components/HitCard/HitCard';

const AuthorBook: FC<AuthorBookProps> = ({ books, authorName, id }) => {
  return (
    <section className={styles.books}>
      <h3>Книги автора</h3>
      {books && (
        <div>
          {books.map((book) => (
            <HitCard
              key={book.id}
              data={{ ...book, authors: [{ id: id, name: authorName }] }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default AuthorBook;
