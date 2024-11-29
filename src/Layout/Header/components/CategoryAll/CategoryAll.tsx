import { FC, ReactNode } from 'react';

import styles from './CategoryAll.module.scss';
import { useGetAllAttributesQuery } from '@/redux/services/attributes';
export interface CategoryAllProps {
  children: (id: number, name: string) => ReactNode;
}
const CategoryAll: FC<CategoryAllProps> = ({ children }) => {
  const { data, isSuccess } = useGetAllAttributesQuery();

  return (
    <ul className={styles.list}>
      {isSuccess && data.categories.map(({ id, name }) => children(id, name))}
    </ul>
  );
};

export default CategoryAll;
