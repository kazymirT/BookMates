import styles from './SearchLoading.module.scss';
import Skeleton from '@/components/Skeleton/components/Skeleton/Skeleton';

const SearchLoading = () => {
  return (
    <div className={styles.loading}>
      <Skeleton variant="button-3" />
      <Skeleton variant="search" />
      <Skeleton variant="search" />
      <Skeleton variant="search" />
      <Skeleton variant="button-b" />
    </div>
  );
};

export default SearchLoading;
