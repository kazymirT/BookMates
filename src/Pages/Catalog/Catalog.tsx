import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import styles from './Catalog.module.scss';
import { CatalogNavigate } from './Catalog.types';
import Filter from './Filter/Filter';
import BookCard from '@/components/BookCard/BookCard';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import Pagination from '@/components/Pagination/Pagination';
import Select from '@/components/ui-components/Select/Select';
import { useGetBooksQuery } from '@/redux/services/books';
import { useGetCategoryAllQuery } from '@/redux/services/category';
import { BooksData } from '@/redux/services/services.types';
import { SORT_OPTIONS, selectSortOptions } from '@/utils/constants';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';

const Catalog = () => {
  const navigate = useNavigate();
  const { sort, page, url, categoryId } = useLoaderData() as CatalogNavigate;
  const [sortProduct, setSortProduct] = useState(sort);

  useEffect(() => {
    sort.length && setSortProduct(sort);
  }, [sort]);

  const newUrl = new URL(url.toString());

  const handleChangeSort = (newSort: string) => {
    setParams('sort', newSort);
  };

  const setParams = (paramsName: string, paramsValue: string) => {
    newUrl.searchParams.set(paramsName, paramsValue);
    newUrl.searchParams.set('page', '1');
    navigate(`${newUrl.search}`);
  };

  const { data: categoryAll, isLoading } = useGetCategoryAllQuery();
  const {
    data: books,
    isFetching,
    isLoading: booksIsLoading,
  } = useGetBooksQuery({
    page,
    sort: [SORT_OPTIONS[sortProduct]],
    categoryId,
  });
  const booksClassName = classNames(styles.books, {
    [styles.disabled]: isFetching && !isLoading,
  });

  const data = (
    books
      ? books.content
      : Array.from({ length: 9 }, (_, index) => ({ id: index }))
  ) as BooksData[];

  const currentCategory = categoryAll
    ? categoryAll.find((category) => category.id === Number(categoryId))
    : undefined;

  const breadcrumbs = createBreadcrumbs('catalog', currentCategory);
  return (
    <section className={styles.catalog}>
      <div className="container">
        <div className={styles['catalog-container']}>
          <Breadcrumbs options={breadcrumbs} activeLastLink={false} />
          <div className={styles.title}>
            <h2>Каталог</h2>
            <div className={styles.sort}>
              <Select
                style="secondary"
                onChange={handleChangeSort}
                options={selectSortOptions}
                value={sortProduct}
              />
            </div>
          </div>
          <div className={styles.main}>
            <aside className={styles.filters}>
              <Filter
                title="Категорії"
                filters={!isLoading ? categoryAll : undefined}
              />
            </aside>
            <section className={styles.box}>
              <div className={booksClassName}>
                {data.map((book) => (
                  <BookCard
                    key={book.id}
                    data={!booksIsLoading ? book : undefined}
                  />
                ))}
              </div>
              {books && (
                <Pagination
                  totalPages={books?.totalPages}
                  currentPage={books?.pageable.pageNumber}
                />
              )}
              {isFetching && !isLoading && (
                <div className={styles.fetching}></div>
              )}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
