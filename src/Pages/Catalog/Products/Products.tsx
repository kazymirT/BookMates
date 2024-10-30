import classNames from 'classnames';
import { useEffect, useRef } from 'react';

import styles from './Products.module.scss';
import Pagination from '@/components/Pagination/Pagination';
import ProductCard from '@/components/ProductCard/ProductCard';
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
    currentData,
    isFetching,
    isLoading,
  } = useGetBooksQuery({
    page,
    size: '16',
    sort: [sort.replace('-', ',')],
    search,
    categories: categories.map((c) => c.name),
    price,
    language: language.map((l) => l.name),
    years: years.map((y) => y.name),
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  const booksClassName = classNames(styles.books, {
    [styles.disabled]: isFetching && !isLoading,
  });

  useEffect(() => {
    if (sectionRef.current && books !== currentData) {
      const sectionTop =
        sectionRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: sectionTop - 130, behavior: 'smooth' });
    }
  }, [books, currentData]);
  return (
    <section ref={sectionRef} className={styles.box}>
      {(books && books.content.length) || isFetching || isLoading ? (
        <>
          <div className={booksClassName}>
            {books &&
              books.content.map((book) => (
                <ProductCard data={book} key={book.id} variant="catalog" />
              ))}
          </div>
          {books && books.totalElements > 16 && (
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
