import { Link } from 'react-router-dom';

import styles from './BookCategory.module.scss';
import { useGetAllAttributesQuery } from '@/redux/services/attributes';

const BookCategory = () => {
  const { data: category, isSuccess } = useGetAllAttributesQuery();
  return (
    <section className={styles.category}>
      <h3 className={styles.title}>Каталог книг</h3>
      <div className={styles.content}>
        {isSuccess &&
          category.categories.map(({ id, name }) => (
            <Link to={'#'} key={id} className={styles.link}>
              {name}
            </Link>
          ))}
      </div>
    </section>
  );
};

export default BookCategory;
