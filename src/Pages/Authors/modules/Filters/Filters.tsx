import styles from './Filters.module.scss';
import Alphabet from '../../components/Alphabet/Alphabet';
import SearchAuthor from '../../components/Search/SearchAuthor';

const Filters = () => {
  return (
    <div className={styles.filters}>
      <Alphabet />
      <SearchAuthor />
    </div>
  );
};

export default Filters;
