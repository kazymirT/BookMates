import InputWithButton from '@ui_components/InputWithButton/InputWithButton';
import { FC } from 'react';

import styles from './SearchInput.module.scss';
import { SearchInputProps } from './types';
import searchIcon from '@/assets/icons/search.svg';

const SearchInput: FC<SearchInputProps> = ({
  value,
  onChange,
  onSearch,
  onKeyDown,
  onFocus,
  t,
}) => {
  return (
    <div className={styles.search}>
      <InputWithButton
        type="text"
        placeholder={t('header.search.placeholder')}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        value={value}
        onChange={onChange}
        variant="search"
      >
        <button className={styles.btn} type="button" onClick={onSearch}>
          <img src={searchIcon} width={24} height={24} alt="search icon" />
        </button>
      </InputWithButton>
    </div>
  );
};

export default SearchInput;
