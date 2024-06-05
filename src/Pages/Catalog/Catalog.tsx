import { useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Catalog.module.scss';
import Filter from './Filter/Filter';
import BookCard from '@/components/BookCard/BookCard';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import Pagination from '@/components/Pagination/Pagination';
import Select from '@/components/ui-components/Select/Select';
import { categories, selectOptions } from '@/utils/constants';
import { catalogBooks } from '@/utils/fake';
import { createBreadcrumbs } from '@/utils/getCrumbs';

const totalElements = 35;
const elementsPerPage = 9;

const Catalog = () => {
  const { categoryId } = useParams();
  const [sortValue, setSortValue] = useState<string>('За популярністю');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const crumbs = createBreadcrumbs('catalog', categoryId);

  const handleChangePage = (nextPage: number) => {
    if (currentPage !== nextPage) {
      setCurrentPage(nextPage);
    }
  };

  const handleChangeSort = (value: string) => {
    if (sortValue !== value) {
      setSortValue(value);
    }
  };

  return (
    <>
      <section className={styles.catalog}>
        <div className="container1200">
          <div className={styles['catalog-container']}>
            <Breadcrumbs options={crumbs} />
            <div className={styles.title}>
              <h2>Каталог</h2>
              <div className={styles.select}>
                <Select
                  style="secondary"
                  onChange={handleChangeSort}
                  options={selectOptions}
                  value={sortValue}
                />
              </div>
            </div>
            <div className={styles.main}>
              <aside className={styles.filters}>
                <Filter title="Категорії" filters={categories} />
              </aside>
              <section className={styles.box}>
                <div className={styles.books}>
                  {catalogBooks &&
                    catalogBooks.map((book) => (
                      <BookCard key={book.id} slag={categoryId} data={book} />
                    ))}
                </div>
                <Pagination
                  elementsPerPage={elementsPerPage}
                  totalElements={totalElements}
                  currentPage={currentPage}
                  onChange={handleChangePage}
                />
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;
