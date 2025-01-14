import classNames from 'classnames';
import { useEffect } from 'react';

import styles from './Products.module.scss';
import Pagination from '@/components/Pagination/Pagination';
import ProductCard from '@/components/ProductCard/ProductCard';
import SkeletonProductCard from '@/components/Skeleton/SkeletonProductCard';
import { useAppSelector } from '@/redux/hooks';
import { useGetBooksQuery } from '@/redux/services/books';
import { queryAllData } from '@/redux/slices/queryParams';
import { isLoading } from '@/redux/slices/skeletonSlice';

export const PRODUCT_OF_PAGE = 16;

const Products = () => {
  const isSkeleton = useAppSelector(isLoading);
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
    isLoading: isLoadingBooks,
  } = useGetBooksQuery({
    page,
    size: `${PRODUCT_OF_PAGE}`,
    sort: [sort.replace('-', ',')],
    search,
    categories: categories.map((c) => c.name),
    price,
    language: language.map((l) => l.name),
    years: years.map((y) => y.name),
  });

  const booksClassName = classNames(styles.books, {
    [styles.disabled]: isFetching && !isLoadingBooks,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [books]);
  return (
    <section className={styles.box}>
      {(!isSkeleton && books && books.content.length) ||
      isFetching ||
      isLoadingBooks ? (
        <>
          <div className={booksClassName}>
            {books &&
              books.content.map((book) => (
                <ProductCard data={book} key={book.id} variant="catalog" />
              ))}
          </div>
          {books && books.totalElements > PRODUCT_OF_PAGE && (
            <Pagination
              totalPages={books?.totalPages}
              currentPage={books?.pageable.pageNumber}
            />
          )}
        </>
      ) : (
        <></>
      )}
      {!isSkeleton && books && !books.content.length && (
        <p className={styles['no-result']}>
          Результатів пошуку по вибраних значеннях фільтра не знайдено
        </p>
      )}
      {isFetching && !isLoadingBooks && <div className={styles.fetching}></div>}
      {isSkeleton && (
        <div className={booksClassName}>
          <SkeletonProductCard variant="catalog" cards={PRODUCT_OF_PAGE} />
        </div>
      )}
    </section>
  );
};

export default Products;
