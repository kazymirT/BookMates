import CategoryItem from './Category';
import styles from './CategoryAll.module.scss';
import { useGetAllAttributesQuery } from '@/redux/services/attributes';

const CategoryAll = () => {
  const { data, isSuccess } = useGetAllAttributesQuery();

  return (
    <ul className={styles.list}>
      {isSuccess &&
        data.categories.map(({ id, name }) => (
          <CategoryItem key={id} id={id} name={name} />
        ))}
    </ul>
  );
};

export default CategoryAll;
