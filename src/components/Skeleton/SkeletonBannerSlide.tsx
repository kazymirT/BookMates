import Skeleton from './components/Skeleton/Skeleton';
import styles from './Skeleton.module.scss';

const SkeletonBannerSlide = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.text}>
        <Skeleton variant="title-b" />
        <Skeleton variant="title-b" />
      </div>
      <Skeleton variant="subtitle-b" />
      <Skeleton variant="button-b" />
    </div>
  );
};

export default SkeletonBannerSlide;
