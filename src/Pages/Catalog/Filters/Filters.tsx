import Filter from './Filter/Filter';
import styles from './Filters.module.scss';
import PriceFilter from './PriceFilter/PriceFilter';
import { FILTERS } from '@/utils/fake';

const Filters = () => {
  return (
    <aside className={styles.filters}>
      <Filter
        title="Категорії"
        categories={FILTERS.categories}
        filterType="categories"
        isDefaultOpen
      />
      <Filter
        title="Мова"
        filterType="language"
        categories={FILTERS.language}
      />
      <Filter
        title="Рік видання"
        filterType="years"
        categories={FILTERS.years}
        isScroll
        isDefaultOpen
      />
      <PriceFilter
        title="Ціна"
        filterType="price"
        price={{ max: 700, min: 0 }}
      />
    </aside>
  );
};

export default Filters;
