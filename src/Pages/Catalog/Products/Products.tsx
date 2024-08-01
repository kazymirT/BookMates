import classNames from 'classnames';

import styles from './Products.module.scss';
import BookCard from '@/components/BookCard/BookCard';
import Pagination from '@/components/Pagination/Pagination';
import { useAppSelector } from '@/redux/hooks';
import { useGetBooksQuery } from '@/redux/services/books';
import { queryAllData } from '@/redux/slices/queryParams';
import { SORT_OPTIONS } from '@/utils/constants';

const Products = () => {
  const { filter, page, search, sort } = useAppSelector(queryAllData);
  const {
    data: books,
    isFetching,
    isLoading,
  } = useGetBooksQuery({
    page,
    sort: [SORT_OPTIONS[sort ?? 'За популярністю']],
  });
  console.log(filter, search);
  const booksClassName = classNames(styles.books, {
    [styles.disabled]: isFetching && !isLoading,
  });

  return (
    <section className={styles.box}>
      <div className={booksClassName}>
        {books &&
          books?.content.map((book) => (
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
    </section>
  );
};

export default Products;
