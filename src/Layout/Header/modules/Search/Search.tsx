import SearchInput from './components/SearchInput/SearchInput';
import SearchResult from './components/SearchResult/SearchResult';
import styles from './Search.module.scss';
import { useSearch } from '@/hooks/useSearch';

const Search = () => {
  const {
    value,
    isOpen,
    handleOnChange,
    handleOnSearch,
    handleKeyDown,
    wrapperRef,
    setIsFocusTrue,
    t,
  } = useSearch();

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <SearchInput
        value={value}
        onChange={handleOnChange}
        onSearch={handleOnSearch}
        onKeyDown={handleKeyDown}
        onFocus={setIsFocusTrue}
        t={t}
      />
      <SearchResult
        isOpen={isOpen}
        value={value}
        onClickSearch={handleOnSearch}
        t={t}
      />
    </div>
  );
};

export default Search;
