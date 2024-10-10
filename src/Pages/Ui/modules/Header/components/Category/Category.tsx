import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '@/redux/hooks';
import { addFilterItem } from '@/redux/slices/queryParams';
export interface CategoryItemProps {
  id: number;
  name: string;
}
const CategoryItem: FC<CategoryItemProps> = ({ id, name }) => {
  const dispatch = useAppDispatch();
  const handleFilterChange = () => {
    dispatch(
      addFilterItem({ filterName: 'categories', attributes: { id, name } })
    );
  };
  return (
    <Link to={`/catalog?categories=${id}`} onClick={handleFilterChange}>
      {name}
    </Link>
  );
};

export default CategoryItem;
