import { FC } from 'react';

import FilterContent from './FilterContent';
import styles from './Filters.module.scss';
import { useGetAllAttributesQuery } from '@/redux/services/attributes';

const Filters: FC = () => {
  const { data: attributes, isSuccess } = useGetAllAttributesQuery();
  return (
    <aside className={styles.filters}>
      {isSuccess && <FilterContent attributes={attributes} />}
    </aside>
  );
};

export default Filters;
