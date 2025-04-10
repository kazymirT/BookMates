import { type FC } from 'react';

import styles from './SearchResultList.module.scss';
import { type SearchResultListProps } from './types';

const SearchResultList: FC<SearchResultListProps> = ({ children }) => {
  return (
    <div className={styles.books}>
      <ul className={styles['books_list']} role="listbox">
        {children}
      </ul>
    </div>
  );
};

export default SearchResultList;
