import { useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Catalog.module.scss';
import Filter from './Filter/Filter';
import BookCard from '@/components/BookCard/BookCard';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import Select from '@/components/ui-components/Select/Select';
import { categories, selectOptions } from '@/utils/constants';
import { catalogBooks } from '@/utils/fake';
import { createBreadcrumbs } from '@/utils/getCrumbs';

const Catalog = () => {
  const { categoryId } = useParams();
  const [sortValue, setSortValue] = useState<string>('За популярністю');

  const handleChangeSort = (value: string) => {
    if (sortValue !== value) {
      setSortValue(value);
    }
  };
  const crumbs = createBreadcrumbs('catalog', categoryId);

  return (
    <>
      <section className={styles.catalog}>
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
          <section className={styles.books}>
            {catalogBooks &&
              catalogBooks.map((book) => (
                <BookCard key={book.id} slag={categoryId} data={book} />
              ))}
          </section>
        </div>
      </section>
    </>
  );
};

export default Catalog;
