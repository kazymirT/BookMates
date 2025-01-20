import { FC } from 'react';

import FilterContent from './components/FilterContent/FilterContent';
import styles from './Filters.module.scss';
import { useGetAllAttributesQuery } from '@/redux/services/attributes';

const Filters: FC = () => {
  const { data: attributes, isSuccess } = useGetAllAttributesQuery();

  return (
    <div className={styles.filters}>
      {isSuccess && <FilterContent attributes={attributes} />}
    </div>
  );
};

export default Filters;
