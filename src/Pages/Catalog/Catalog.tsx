import { useState } from 'react';

import styles from './Catalog.module.scss';
import Filter from './Filter/Filter';
import BookCard from '@/components/BookCard/BookCard';
import Select from '@/components/ui-components/Select/Select';
import { catalogBooks } from '@/utils/fake';

const categories = [
  {
    id: 1,
    name: 'Хіти продажів',
  },
  {
    id: 2,
    name: 'Вигідні пропозиції',
  },
  {
    id: 3,
    name: 'Книги іноземними мовами',
  },
  {
    id: 4,
    name: 'Вивчення мов',
  },
  {
    id: 5,
    name: 'Фантастика, фентезі',
  },
  {
    id: 6,
    name: 'Психологія і взаємини',
  },
  {
    id: 7,
    name: 'Саморозвиток',
  },
  {
    id: 8,
    name: 'Бізнес, гроші, економіка',
  },
  {
    id: 9,
    name: 'Дитяча література',
  },
  {
    id: 10,
    name: 'Біографія і мемуари',
  },
  {
    id: 11,
    name: 'Хоббі і дозвілля',
  },
  {
    id: 12,
    name: 'Художня література',
  },
];
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
