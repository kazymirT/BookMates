import { useState } from 'react';

import styles from './Catalog.module.scss';
import Filter from './Filter/Filter';
import BookCard from '@/components/BookCard/BookCard';
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

const Catalog = () => {
  const [selectValue, setSelectValue] = useState<string>('За популярністю');
  const handleChangeSelect = (value: string) => {
    if (selectValue !== value) {
      setSelectValue(value);
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
          <section className={styles.books}>
            {catalogBooks &&
              catalogBooks.map((book) => (
                <BookCard key={book.id} data={book} />
              ))}
          </section>
        </div>
      </section>
    </>
  );
};

export default Catalog;
