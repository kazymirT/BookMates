import { type FC } from 'react';

import styles from './CategoryAll.module.scss';
import { type CategoryAllProps } from './types';
import { useGetAllAttributesQuery } from '@/redux/services/attributes';

const CategoryAll: FC<CategoryAllProps> = ({ children }) => {
  const { data, isSuccess } = useGetAllAttributesQuery();

  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollbar}>
        <ul className={styles.list}>
          {isSuccess &&
            data.categories.map(({ id, name }) => (
              <li key={id}>{children(id, name)}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryAll;
