import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './SearchAuthor.module.scss';
import search from '@/assets/icons/search.svg';
import InputWithButton from '@/components/ui-components/InputWithButton/InputWithButton';

const SearchAuthor = () => {
  const [value, setValue] = useState('');
  const { t } = useTranslation();

  const handleOnSearch = () => console.log('search', value);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && value.length > 2) {
      handleOnSearch();
      event.currentTarget.blur();
    }
  };
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <InputWithButton
          type="text"
          placeholder={t('authors.search')}
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
    </div>
  );
};

export default SearchAuthor;
