import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './BookSeries.module.scss';
import { type BookSeriesProps } from './types';

const BookSeries: FC<BookSeriesProps> = ({ series: { books, seriesName } }) => {
  return (
    <section className={styles.series}>
      <h4>{seriesName}</h4>
      <ul>
        {books.map(({ id, linkedBook, title }) => (
          <li key={id}>
            {linkedBook ? (
              <Link to={`/product/${linkedBook.id}`}>{title}</Link>
            ) : (
              title
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BookSeries;
