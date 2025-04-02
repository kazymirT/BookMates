import { type FC } from 'react';

import styles from './CategoryList.module.scss';
import { type CategoryListProps } from './types';
import SkeletonCategory from '@/components/Skeleton/SkeletonCategories';
import { useGetAllAttributesMetaQuery } from '@/redux/services/meta';

const CategoryList: FC<CategoryListProps> = ({ children }) => {
  const { data, isSuccess, isLoading } = useGetAllAttributesMetaQuery();
  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollbar}>
        <ul className={styles.list}>
          {isSuccess &&
            data.cats.map((category) => (
              <li key={category.id}>{children(category)}</li>
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
