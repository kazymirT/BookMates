import { FC } from 'react';
import { Link } from 'react-router-dom';

import { CategoryItemProps } from './types';
import { useAppDispatch } from '@/redux/hooks';
import { addFilterItem } from '@/redux/slices/queryParams';

const CategoryItem: FC<CategoryItemProps> = ({ id, name }) => {
  const dispatch = useAppDispatch();

  const handleFilterChange = () => {
    dispatch(
      addFilterItem({ filterName: 'categories', attributes: { id, name } })
    );
  };
  return (
    <li>
      <Link to={`/catalog?categories=${id}`} onClick={handleFilterChange}>
        {name}
      </Link>
    </li>
  );
};

export default CategoryItem;
