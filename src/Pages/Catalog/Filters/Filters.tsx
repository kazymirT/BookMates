import Filter from './Filter/Filter';
import styles from './Filters.module.scss';
import PriceFilter from './PriceFilter/PriceFilter';
// import { useGetCategoryAllQuery } from '@/redux/services/category';
import { FILTERS } from '@/utils/fake';

const Filters = () => {
  // const { data: categoryAll, isLoading } = useGetCategoryAllQuery();
  const handleFilterChange = () => {
    // console.log('change filter');
  };

  return (
    <aside className={styles.filters}>
      <Filter
        title="Категорії"
        categories={FILTERS.categories}
        onFilterChange={handleFilterChange}
      />
      <Filter
        title="Мова"
        categories={FILTERS.language}
        onFilterChange={handleFilterChange}
      />
      <Filter
        title="Рік видання"
        categories={FILTERS.years}
        isScroll
        onFilterChange={handleFilterChange}
      />
      <PriceFilter
        title="Ціна"
        onFilterChange={handleFilterChange}
        price={{ max: 500, min: 0 }}
      />
    </aside>
  );
};

export default Filters;
