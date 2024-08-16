import { ChangeEvent, useRef, useState } from 'react';

import Result from './Result';
import styles from './Search.module.scss';
import search from '@/assets/icons/search.svg';
import useClickOutside from '@/hooks/useClickOutside';

const Search = () => {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const handleOnClose = () => setIsOpen(false);

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
        <button type="button">
          <img src={search} width={24} height={24} alt="search icon" />
        </button>
      </div>
      <Result isOpen={isOpen} value={value} handleOnClose={handleOnClose} />
    </div>
  );
};

export default Search;
