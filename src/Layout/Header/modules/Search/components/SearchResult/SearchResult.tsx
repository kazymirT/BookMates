import { Position, Sizes, Variant } from '@ui_components/Button/constants';
import { Icon } from '@ui_components/Icons';
import { type FC } from 'react';

import styles from './SearchResult.module.scss';
import { type SearchResultProps } from './types';
import SearchLoading from '../SearchLoading/SearchLoading';
import SearchNoResults from '../SearchNoResults/SearchNoResults';
import SearchResultItem from '../SearchResultItem/SearchResultItem';
import SearchResultList from '../SearchResultList/SearchResultList';
import { Button } from '@/components/ui-components/Button/Button';
import { useGetSearchQuery } from '@/redux/services/books';

const SearchResult: FC<SearchResultProps> = ({
  value,
  isOpen,
  onClickSearch,
  t,
}) => {
  const {
    data: books,
    isLoading,
    isSuccess,
    isFetching,
  } = useGetSearchQuery(
    { lang: 'ua', query: value },
    { skip: value.length < 3 }
  );
  return (
    isOpen && (
      <div className={styles.results}>
        <div className={styles.content}>
          <p className={styles.search}>
            {t('header.search.search', { value })}
          </p>
          {isSuccess && !!books?.books.length && (
            <>
              <SearchResultList>
                {books.books.map((book) => (
                  <SearchResultItem
                    book={book}
                    onClickItem={onClickSearch}
                    key={book.id}
                  />
                ))}
              </SearchResultList>
            </>
          )}
          {isSuccess && !books.books.length && <SearchNoResults />}
          {(isLoading || isFetching) && <SearchLoading />}
        </div>
        {!!books?.books && (
          <Button
            type="button"
            icon={<Icon.Arrow />}
            iconPosition={Position.Right}
            size={Sizes.Small}
            text={t('header.search.show-all')}
            onClick={onClickSearch}
            variant={Variant.Basic}
          />
        )}
      </div>
    )
  );
};

export default SearchResult;
