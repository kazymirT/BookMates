import Skeleton from './components/Skeleton/Skeleton';
import styles from './Skeleton.module.scss';

const SkeletonCategory = () => {
  return Array.from({ length: 12 }).map((_, i) => (
    <div className={styles.category} key={i} aria-label="skeleton category">
      <Skeleton variant="category" />
    </div>
  ));
};

export default SkeletonCategory;
