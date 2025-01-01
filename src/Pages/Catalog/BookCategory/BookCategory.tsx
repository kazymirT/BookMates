import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './BookCategory.module.scss';
import { useAppDispatch } from '@/redux/hooks';
import { useGetAllAttributesQuery } from '@/redux/services/attributes';
import { addFilterItem } from '@/redux/slices/queryParams';

const BookCategory = () => {
  const dispatch = useAppDispatch();
  const { data: category, isSuccess } = useGetAllAttributesQuery();
  const setCategory = (id: number, name: string) => {
    dispatch(
      addFilterItem({
        filterName: 'categories',
        attributes: { id, name },
        isClean: true,
      })
    );
  };
  const linkClass = (id: number) => {
    const isActive =
      new URLSearchParams(location.search).get('categories') === String(id);
    return classNames(styles.link, { [styles.active]: isActive });
  };
  return (
    <section className={styles.category}>
      <h3 className={styles.title}>Каталог книг</h3>
      <div className={styles.content}>
        {isSuccess &&
          category.categories.slice(0, 12).map(({ id, name }) => (
            <NavLink
              to={`/catalog?categories=${id}`}
              onClick={() => setCategory(id, name)}
              key={id}
              className={() => linkClass(id)}
            >
              {name}
            </NavLink>
          ))}
      </div>
    </section>
  );
};

export default BookCategory;
