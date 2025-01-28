import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './SearchResultList.module.scss';
import { type SearchResultListProps } from './types';

const SearchResultList: FC<SearchResultListProps> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.books}>
      <h3>{t('header.search.books')}</h3>
      <ul className={styles['books_list']} role="listbox">
        {children}
      </ul>
    </div>
  );
};

export default SearchResultList;
