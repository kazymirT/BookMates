import { useState } from 'react';

import styles from './Catalog.module.scss';
import Filter from './Filter/Filter';
import BookCard from '@/components/BookCard/BookCard';
import Pagination from '@/components/Pagination/Pagination';
import Select from '@/components/ui-components/Select/Select';
import { categories } from '@/utils/constants';
import { catalogBooks } from '@/utils/fake';

const selectOptions = [
  'За популярністю',
  'Спочатку дешеві',
  'Спочатку дорогі',
  'Спочатку нові',
  'За назвою',
];
const totalElements = 35;
const elementsPerPage = 9;

const Catalog = () => {
  const [selectValue, setSelectValue] = useState<string>('За популярністю');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const handleChangeSelect = (value: string) => {
    if (selectValue !== value) {
      setSelectValue(value);
    }
  };
  const handleChangePage = (nextPage: number) => {
    if (currentPage !== nextPage) {
      setCurrentPage(nextPage);
    }
  };
  return (
    <>
      <section className={styles.catalog}>
        <div className={styles.title}>
          <h2>Каталог</h2>
          <div className={styles.select}>
            <Select
              style="secondary"
              onChange={handleChangeSelect}
              options={selectOptions}
              value={selectValue}
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
                  <BookCard key={book.id} data={book} />
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
      </section>
    </>
  );
};

export default Catalog;
