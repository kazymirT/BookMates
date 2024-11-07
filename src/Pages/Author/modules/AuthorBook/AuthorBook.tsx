import { FC } from 'react';

import styles from './AuthorBook.module.scss';
import { AuthorBookProps } from './types';
import HitCard from '@/Pages/Catalog/HitCard/HitCard';
import { useGetBooksQuery } from '@/redux/services/books';

const AuthorBook: FC<AuthorBookProps> = ({ authorName }) => {
  const { data: books } = useGetBooksQuery({ authors: [authorName] });
  return (
    <section className={styles.books}>
      <h3>Книги автора</h3>
      {books && (
        <div>
          {books.content.map((book) => (
            <HitCard key={book.id} data={book} />
          ))}
        </div>
      )}
    </section>
  );
};

export default AuthorBook;
