import classNames from 'classnames';
import { useLoaderData } from 'react-router-dom';

import styles from '../Catalog.module.scss';
import BookCard from '@/components/BookCard/BookCard';
import Pagination from '@/components/Pagination/Pagination';
import { useGetBooksQuery } from '@/redux/services/books';
import { BooksData } from '@/redux/services/services.types';
import { SORT_OPTIONS } from '@/utils/constants';

const Products = () => {
  const { page, size, sort, categoryId } = useLoaderData() as {
    page: number;
    size: string;
    sort: string;
    categoryId: string;
  };

  const {
    data: books,
    isFetching,
    isLoading,
  } = useGetBooksQuery({
    page: page,
    sort: [SORT_OPTIONS[sort]],
    categoryId: categoryId,
    size: size,
  });

  const booksClassName = classNames(styles.books, {
    [styles.disabled]: isFetching && !isLoading,
  });
  const data = (
    books
      ? books.content
      : Array.from({ length: 9 }, (_, index) => ({ id: index }))
  ) as BooksData[];
  return (
    <section className={styles.box}>
      {
        <>
          <div className={booksClassName}>
            {data.map((book) => (
              <BookCard key={book.id} data={!isLoading ? book : undefined} />
            ))}
          </div>
          {books && (
            <Pagination
              totalPages={books?.totalPages}
              currentPage={books?.pageable.pageNumber}
            />
          )}

          {isFetching && !isLoading && <div className={styles.fetching}></div>}
        </>
      }
    </section>
  );
};

export default Products;
