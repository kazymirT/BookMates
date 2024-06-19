import Filter from './Filter/Filter';
import styles from './Filters.module.scss';
import { useGetCategoryAllQuery } from '@/redux/services/category';

const Filters = () => {
  const { data: categoryAll, isLoading } = useGetCategoryAllQuery();

  return (
    <aside className={styles.filters}>
      <Filter
        title="Категорії"
        filters={!isLoading ? categoryAll : undefined}
      />
    </aside>
  );
};

export default Filters;
