import styles from './HitProducts.module.scss';
import BookCard from '@/components/BookCard/BookCard';
import { hitBooks } from '@/utils/fake';

const HitProducts = () => {
  return (
    <section className={styles.hit}>
      <div className="container">
        <div className={styles.headers}>
          <h2>Хіти продажів</h2>
          <button>більше</button>
        </div>
        <div className={styles.books}>
          {hitBooks &&
            hitBooks.map((book) => <BookCard key={book.id} data={book} />)}
        </div>
      </div>
    </section>
  );
};

export default HitProducts;
