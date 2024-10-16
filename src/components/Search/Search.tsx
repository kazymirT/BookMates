import { ChangeEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Result from './Result';
import styles from './Search.module.scss';
import InputWithButton from '../InputWithButton/InputWithButton';
import search from '@/assets/icons/search.svg';
import useClickOutside from '@/hooks/useClickOutside';
import { useAppDispatch } from '@/redux/hooks';
import { setSearch } from '@/redux/slices/queryParams';

const Search = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  const clearValue = () => setValue('');
  const handleOnClose = () => setIsOpen(false);
  const handleOnSearch = () => {
    dispatch(setSearch(value));
    navigate(`/catalog/?search=${value}`);
    handleOnClose();
    clearValue();
  };
  useClickOutside(wrapperRef, handleOnClose);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && value.length > 2) {
      handleOnSearch();
      event.currentTarget.blur();
    }
  };
  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.search}>
        <InputWithButton
          type="text"
          placeholder={t('header.search.placeholder')}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          value={value}
          onChange={handleOnChange}
          variant="search"
        >
          <button className={styles.btn} type="button" onClick={handleOnSearch}>
            <img src={search} width={24} height={24} alt="search icon" />
          </button>
        </InputWithButton>
      </div>
      <Result
        isOpen={isOpen && value.length >= 3}
        value={value}
        handleOnClose={handleOnClose}
        clearValue={clearValue}
      />
    </div>
  );
};

export default Search;
