import classNames from 'classnames';
import { useEffect } from 'react';

import FilterClear from './FilterClear';
import styles from './Products.module.scss';
import BookCard from '@/components/BookCard/BookCard';
import Pagination from '@/components/Pagination/Pagination';
import { useAppSelector } from '@/redux/hooks';
import { useGetBooksQuery } from '@/redux/services/books';
import { queryAllData } from '@/redux/slices/queryParams';

const Products = () => {
  const {
    filter: { categories, language, years },
    page,
    sort,
    price,
    search,
  } = useAppSelector(queryAllData);
  const {
    data: books,
    isFetching,
    isLoading,
  } = useGetBooksQuery({
    page,
    sort: [sort.replace('-', ',')],
    search,
    categories: categories.map((c) => c.name),
    price,
    language: language.map((l) => l.name),
    years: years.map((y) => y.name),
  });
  const booksClassName = classNames(styles.books, {
    [styles.disabled]: isFetching && !isLoading,
  });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return (
    <section className={styles.box}>
      <FilterClear />
      {(books && books.content.length) || isFetching || isLoading ? (
        <>
          <div className={booksClassName}>
            {books?.content.map((book) => (
              <BookCard key={book.id} data={!isLoading ? book : undefined} />
            ))}
          </div>
          {books && books.totalElements > 9 && (
            <Pagination
              totalPages={books?.totalPages}
              currentPage={books?.pageable.pageNumber}
            />
          )}
        </>
      ) : (
        <p className={styles['no-result']}>
          Результатів пошуку по вибраних значеннях фільтра не знайдено
        </p>
      )}
      {isFetching && !isLoading && <div className={styles.fetching}></div>}
    </section>
  );
};

export default Products;
