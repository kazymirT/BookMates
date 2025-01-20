import classNames from 'classnames';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Products.module.scss';
import Pagination from '@/components/Pagination/Pagination';
import ProductCard from '@/components/ProductCard/ProductCard';
import SkeletonProductCard from '@/components/Skeleton/SkeletonProductCard';
import { useAppSelector } from '@/redux/hooks';
import { useGetBooksQuery } from '@/redux/services/books';
import { queryAllData } from '@/redux/slices/queryParams';

export const PRODUCT_OF_PAGE = 16;

const Products = () => {
  const { t } = useTranslation();
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
    size: `${PRODUCT_OF_PAGE}`,
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
  }, [books]);
  return (
    <section className={styles.box}>
      {books &&
        (!!books.content.length ? (
          <div className={booksClassName}>
            {books.content.map((book) => (
              <ProductCard data={book} key={book.id} variant="catalog" />
            ))}
          </div>
        ) : (
          <p className={styles['no-result']}>{t('catalog.no-product')}</p>
        ))}
      {books && books.totalElements > PRODUCT_OF_PAGE && (
        <Pagination
          totalPages={books?.totalPages}
          currentPage={books?.pageable.pageNumber}
        />
      )}
      {isFetching && !isLoading && <div className={styles.fetching}></div>}
      {isLoading && (
        <div className={booksClassName}>
          <SkeletonProductCard variant="catalog" cards={PRODUCT_OF_PAGE} />
        </div>
      )}
    </section>
  );
};

export default Products;
