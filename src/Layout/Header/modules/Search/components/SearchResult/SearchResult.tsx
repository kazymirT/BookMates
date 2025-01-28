import { Position, Sizes, Variant } from '@ui_components/Button/constants';
import { Icon } from '@ui_components/Icons';
import { type FC } from 'react';

import styles from './SearchResult.module.scss';
import { type SearchResultProps } from './types';
import SearchLoading from '../SearchLoading/SearchLoading';
import SearchNoResults from '../SearchNoResults/SearchNoResults';
import SearchOffers from '../SearchOffers/SearchOffers';
import SearchResultItem from '../SearchResultItem/SearchResultItem';
import SearchResultList from '../SearchResultList/SearchResultList';
import { Button } from '@/components/ui-components/Button/Button';
import { useGetBooksQuery } from '@/redux/services/books';
import { SORT_OPTIONS } from '@/utils/constants';

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
  } = useGetBooksQuery(
    { size: '3', search: value, sort: [SORT_OPTIONS['Дорожчі']] },
    { skip: value.length < 3 }
  );
  return (
    isOpen && (
      <div className={styles.results}>
        <div className={styles.content}>
          <p className={styles.search}>
            {t('header.search.search', { value })}
          </p>
          {isSuccess && books?.content.length ? (
            <>
              <SearchOffers />
              <SearchResultList>
                {books.content.map((book) => (
                  <SearchResultItem
                    {...book}
                    onClickItem={onClickSearch}
                    key={book.id}
                  />
                ))}
              </SearchResultList>
            </>
          ) : (
            <SearchNoResults />
          )}
          {isLoading && isFetching && <SearchLoading />}
        </div>
        {!!books?.content.length && (
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
