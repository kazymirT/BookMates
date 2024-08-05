import Filter from './Filter/Filter';
import styles from './Filters.module.scss';
import PriceFilter from './PriceFilter/PriceFilter';
import { useAppSelector } from '@/redux/hooks';
import { filter } from '@/redux/slices/queryParams';
import { updateFilterParams } from '@/utils/updateFilterParams';

const Filters = () => {
  const filterQuery = useAppSelector(filter);
  const { categories, language, price, years } =
    updateFilterParams(filterQuery);
  return (
    <aside className={styles.filters}>
      <Filter
        title="Категорії"
        categories={categories}
        filterType="categories"
        isDefaultOpen
      />
      <Filter
        title="Мова"
        filterType="language"
        categories={language}
        isDefaultOpen
      />
      <Filter
        title="Рік видання"
        filterType="years"
        categories={years}
        isScroll
        isDefaultOpen
      />
      <PriceFilter title="Ціна" isDefaultOpen price={price} />
    </aside>
  );
};

export default Filters;
