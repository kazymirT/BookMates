import classNames from 'classnames';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Products.module.scss';
import { ProductsProps } from './types';
import Pagination from '@/components/Pagination/Pagination';
import ProductCard from '@/components/ProductCard/ProductCard';
import SkeletonProductCard from '@/components/Skeleton/SkeletonProductCard';
import { useAppSelector } from '@/redux/hooks';
import { useGetBooksQuery } from '@/redux/services/books';
import { queryAllData } from '@/redux/slices/queryParams';
import { SORT_OPTIONS_QUERY } from '@/utils/constants';

export const PRODUCT_OF_PAGE = 16;

const Products: FC<ProductsProps> = ({ collectionId }) => {
  const { t, i18n } = useTranslation();
  const {
    page,
    sort,
    filter: { categories, language, years },
    price,
  } = useAppSelector(queryAllData);

  const lang = i18n.language === 'en' ? 'en' : 'ua';
  const {
    data: books,
    isFetching,
    isSuccess,
    isLoading,
  } = useGetBooksQuery({
    lang,
    page,
    limit: `${PRODUCT_OF_PAGE}`,
    years: years.map((lan) => lan.id),
    languages: language.map((lan) => lan.id),
    categoryId: categories.map((category) => category.id),
    collectionId,
    maxPrice: price[1],
    minPrice: price[0],
    sortOptions: SORT_OPTIONS_QUERY[sort],
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
        (!!books.data.length ? (
          <div className={booksClassName}>
            {books.data.map((book) => (
              <ProductCard data={book} key={book.id} variant="catalog" />
            ))}
          </div>
        ) : (
          <p className={styles['no-result']}>{t('catalog.no-product')}</p>
        ))}
      {isSuccess && !!books.data.length && books.total > PRODUCT_OF_PAGE && (
        <Pagination totalPages={books?.totalPages} currentPage={books?.page} />
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
