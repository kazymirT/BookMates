import Skeleton from './components/Skeleton/Skeleton';
import styles from './Skeleton.module.scss';

const SkeletonProductSlideCard = () => {
  return Array.from({ length: 1 }).map((_, i) => (
    <div
      className={styles['slider-card']}
      key={i}
      aria-label="skeleton slider product card"
    >
      <Skeleton variant="img-2" />
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <Skeleton variant="title-c" />
          <Skeleton variant="subtitle" />
          <Skeleton variant="price-2" />
        </div>
      </div>
    </div>
  ));
};

export default SkeletonProductSlideCard;
