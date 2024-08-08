import { ChangeEvent, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Search.module.scss';
import arrow from '@/assets/icons/arrow_up.svg';
import search from '@/assets/icons/search.svg';
import book1 from '@/assets/images/fake/book1.webp';
import useClickOutside from '@/hooks/useClickOutside';
import { useAppDispatch } from '@/redux/hooks';
import { useGetBooksQuery } from '@/redux/services/books';
import { setSearch } from '@/redux/slices/queryParams';
import { SORT_OPTIONS } from '@/utils/constants';

const Search = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { data: books } = useGetBooksQuery(
    { size: '22', search: value, sort: [SORT_OPTIONS['Дорожчі']] }
    // { skip: value.length < 1 }
  );
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  const handleOnClose = () => setIsOpen(false);
  const onClickSearch = () => {
    dispatch(setSearch(value));
    handleOnClose();
  };

  useClickOutside(wrapperRef, handleOnClose);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Шукати"
          value={value}
          onChange={handleOnChange}
          onFocus={() => setIsOpen(true)}
        />
        <button type="button" onClick={onClickSearch}>
          <img src={search} width={24} height={24} alt="search icon" />
        </button>
      </div>
      {isOpen && (
        <div className={styles.results}>
          <div className={styles.content}>
            <p className={styles.search}>Шукати {value}</p>
            <div className={styles.offers}>
              <h3>Пропозиції</h3>
              <ul className={styles['offers_lists']}>
                <li>Джон Сміт</li>
                <li>Доді Сміт</li>
                <li>Білий зуб</li>
                <li>Мартін Крус Сміт</li>
              </ul>
            </div>
            <div className={styles.books}>
              <h3>Книги</h3>
              <ul className={styles['books_list']}>
                {books?.content &&
                  books.content.map((book) => (
                    <Link
                      to={`/product/${book.id}`}
                      key={book.id}
                      className={styles.list}
                      onClick={handleOnClose}
                    >
                      <img
                        src={book1}
                        alt={book.title}
                        width={43}
                        height={66}
                      />
                      <div className={styles.content}>
                        <h3>{book.title}</h3>
                        <span className={styles.price}>{book.price}</span>
                      </div>
                    </Link>
                  ))}
              </ul>
            </div>
          </div>
          <Link
            to={`/catalog/?search=${value}`}
            className={styles.more}
            onClick={onClickSearch}
          >
            Показати все
            <img src={arrow} alt="" width={20} height={20} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Search;
