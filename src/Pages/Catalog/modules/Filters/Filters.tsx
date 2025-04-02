import FilterContent from './components/FilterContent/FilterContent';
import styles from './Filters.module.scss';
import { useGetAllAttributesMetaQuery } from '@/redux/services/meta';

const Filters = () => {
  const { data: attributes, isSuccess } = useGetAllAttributesMetaQuery();

  return (
    <div className={styles.filters}>
      {isSuccess && <FilterContent attributes={attributes} />}
    </div>
  );
};

export default Filters;
