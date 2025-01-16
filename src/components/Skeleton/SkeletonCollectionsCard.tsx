import Skeleton from './components/Skeleton/Skeleton';
import styles from './Skeleton.module.scss';

const SkeletonCollectionsCard = () => {
  return Array.from({ length: 4 }).map((_, i) => (
    <div
      className={styles.collections}
      key={i}
      aria-label="skeleton slider product card"
    >
      <Skeleton variant="img-4" />
      <div className={styles.wrapper}>
        <Skeleton variant="title-b" />
        <Skeleton variant="subtitle" />
      </div>
    </div>
  ));
};

export default SkeletonCollectionsCard;
