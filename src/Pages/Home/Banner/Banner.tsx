import styles from './Banner.module.scss';
import bookshelf from '@/assets/images/bookshelf.png';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.content}>
          <h1>Досліджуй безмежні сторінки</h1>
          <p>
            Знайди свою наступну пригоду <br />в нашій книжковій
            інтернет-крамниці!
          </p>
          <img
            className={styles.images}
            src={bookshelf}
            width={568}
            height={487}
            alt="Bookshelf"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
