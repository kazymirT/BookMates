import Skeleton from './components/Skeleton/Skeleton';
import styles from '../../Pages/Product/Product.module.scss';

const SkeletonProductPage = () => {
  return (
    <section className={styles['details-product']}>
      <div className={styles['img-box']}>
        <Skeleton variant="img-3" />
      </div>
      <div className={styles.book}>
        <div className={styles.info}>
          <div>
            <Skeleton variant="title-p" />
            <Skeleton variant="title-p" />
          </div>
          <Skeleton variant="author" />
        </div>

        <div className={styles.details}>
          <section className={styles.section}>
            <div className={styles.list}>
              {Array.from({ length: 15 }).map((_, i) => (
                <Skeleton variant="title" key={i} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className={styles.control}>
        <div className={styles.price}>
          <Skeleton variant="price-3" />
          <Skeleton variant="subtitle-c" />
        </div>
        <div className={styles.btns}>
          <Skeleton variant="button-3" />
          <Skeleton variant="button-3" />
        </div>
      </div>
    </section>
  );
};

export default SkeletonProductPage;
