import classNames from 'classnames';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Catalog.module.scss';
import Filter from './Filter/Filter';
import BookCard from '@/components/BookCard/BookCard';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import Pagination from '@/components/Pagination/Pagination';
import Select from '@/components/ui-components/Select/Select';
import { useGetBooksQuery } from '@/redux/services/books';
import { useGetCategoryAllQuery } from '@/redux/services/category';
import { SORT_OPTIONS, selectSortOptions } from '@/utils/constants';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';

const Catalog = () => {
  const { categoryId } = useParams();
  const [queryArgs, setQueryArgs] = useState({
    page: 0,
    sort: 'За популярністю',
  });

  const updateQueryArgs = (newArgs: { page?: number; sort?: string }) => {
    setQueryArgs((prevArgs) => ({
      ...prevArgs,
      ...newArgs,
    }));
  };
  const handleChangePage = (nextPage: number) => {
    updateQueryArgs({ page: nextPage });
  };

  const handleChangeSort = (newSort: string) => {
    updateQueryArgs({ sort: newSort, page: 0 });
  };

  const { data: books, isFetching } = useGetBooksQuery({
    page: queryArgs.page,
    sort: [SORT_OPTIONS[queryArgs.sort]],
  });
  const booksClassName = classNames(styles.books, {
    [styles.disabled]: isFetching,
  });
  const { data: categoryAll } = useGetCategoryAllQuery();
  const currentCategory = categoryAll
    ? categoryAll.find((category) => category.id === Number(categoryId))
    : undefined;

  const breadcrumbs = createBreadcrumbs('catalog', currentCategory);
  return (
    <>
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
                  value={queryArgs.sort}
                />
              </div>
            </div>
            <div className={styles.main}>
              <aside className={styles.filters}>
                {categoryAll && (
                  <Filter title="Категорії" filters={categoryAll} />
                )}
              </aside>
              <section className={styles.box}>
                {!books && isFetching && <p>loading...</p>}
                {books && (
                  <>
                    <div className={booksClassName}>
                      {books &&
                        books.content.map((book) => (
                          <BookCard
                            key={book.id}
                            slag={categoryId}
                            data={book}
                          />
                        ))}
                    </div>
                    <Pagination
                      totalPages={books.totalPages}
                      currentPage={books.pageable.pageNumber}
                      onChange={handleChangePage}
                    />
                    {isFetching && <div className={styles.fetching}></div>}
                  </>
                )}
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;
