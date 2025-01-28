import { type FC } from 'react';

import styles from './CategoryList.module.scss';
import { type CategoryListProps } from './types';
import SkeletonCategory from '@/components/Skeleton/SkeletonCategories';
import { useGetAllAttributesQuery } from '@/redux/services/attributes';

const CategoryList: FC<CategoryListProps> = ({ children }) => {
  const { data, isSuccess, isLoading } = useGetAllAttributesQuery();
  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollbar}>
        <ul className={styles.list}>
          {isSuccess &&
            data.categories.map(({ id, name }) => (
              <li key={id}>{children(id, name)}</li>
            ))}
          {isLoading &&
            Array.from({ length: 1 }).map((_, i) => (
              <SkeletonCategory key={i} variant="home" />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
