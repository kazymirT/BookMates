import { FC, ReactNode } from 'react';

import styles from './CategoryAll.module.scss';
import SkeletonCategory from '@/components/Skeleton/SkeletonCategories';
import { useAppSelector } from '@/redux/hooks';
import { useGetAllAttributesQuery } from '@/redux/services/attributes';
import { isLoading } from '@/redux/slices/skeletonSlice';

export interface CategoryAllProps {
  children: (id: number, name: string) => ReactNode;
}

const CategoryAll: FC<CategoryAllProps> = ({ children }) => {
  const { data, isSuccess } = useGetAllAttributesQuery();
  const isSkeleton = useAppSelector(isLoading);
  return (
    <ul className={styles.list}>
      {!isSkeleton &&
        isSuccess &&
        data.categories.map(({ id, name }) => (
          <li key={id}>{children(id, name)}</li>
        ))}
      {isSkeleton &&
        Array.from({ length: 1 }).map((_, i) => (
          <SkeletonCategory key={i} variant="home" />
        ))}
    </ul>
  );
};

export default CategoryAll;
