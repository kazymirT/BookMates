import { skipToken } from '@reduxjs/toolkit/query';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './Search.module.scss';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import Pagination from '@/components/Pagination/Pagination';
import ProductCard from '@/components/ProductCard/ProductCard';
import SkeletonProductCard from '@/components/Skeleton/SkeletonProductCard';
import { useAppSelector } from '@/redux/hooks';
import { useGetBooksQuery } from '@/redux/services/books';
import { queryAllData } from '@/redux/slices/queryParams';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';

const PRODUCT_OF_PAGE = 16;

const Search = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'ua';
  const { search: searchQuery, page } = useAppSelector(queryAllData);
  const {
    data: books,
    isSuccess,
    isFetching,
    isLoading,
  } = useGetBooksQuery(
    searchQuery
      ? { lang, searchQuery, page, limit: `${PRODUCT_OF_PAGE}` }
      : skipToken
  );
  const breadcrumbs = createBreadcrumbs(t('breadcrumbs.search'));
  const booksClassName = classNames(styles.results, {
    [styles.disabled]: isFetching && !isLoading,
  });
  return (
    <div className={styles.search}>
      <div className="container">
        <div className={styles['search__inner']}>
          <Breadcrumbs options={breadcrumbs} activeLastLink />
          <h2 className={styles['search-query']}>
            {t('search.search-query')}
            <span>{`"${searchQuery}"`}</span>
          </h2>
          <div className={booksClassName}>
            <div className={styles.books}>
              {isSuccess &&
                books.data.map((book) => (
                  <ProductCard data={book} key={book.id} variant="catalog" />
                ))}
              {isFetching && !isLoading && (
                <div className={styles.fetching}></div>
              )}
              {isLoading && (
                <SkeletonProductCard
                  variant="catalog"
                  cards={PRODUCT_OF_PAGE}
                />
              )}
            </div>
            {isSuccess &&
              !!books.data.length &&
              books.total > PRODUCT_OF_PAGE && (
                <Pagination
                  totalPages={books?.totalPages}
                  currentPage={books?.page}
                />
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
