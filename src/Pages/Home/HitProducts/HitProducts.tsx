import styles from './HitProducts.module.scss';
import BookCard from '@/components/BookCard/BookCard';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { ButtonLink } from '@/components/ui-components/ButtonLink/ButtonLink';
import { useGetBooksQuery } from '@/redux/services/books';
import { BooksData } from '@/redux/services/services.types';

const HitProducts = () => {
  const { data: books, isLoading } = useGetBooksQuery({
    size: '4',
  });
  const data = (
    books
      ? books.content
      : Array.from({ length: 4 }, (_, index) => ({ id: index }))
  ) as BooksData[];

  return (
    <section className={styles.hit}>
      <div className="container">
        <div className={styles.headers}>
          <h2>Хіти продажів</h2>
          <ButtonLink
            buttonType={ButtonType.Button}
            size={Sizes.Medium}
            text="Більше"
            url="/catalog"
            variant={Variant.Primary}
          />
        </div>

        <div className={styles.books}>
          {data.map((book) => (
            <BookCard key={book.id} data={!isLoading ? book : undefined} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HitProducts;
