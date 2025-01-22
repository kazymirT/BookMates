import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { CategoryItemProps } from './types';
import { useAppDispatch } from '@/redux/hooks';
import { addFilterItem } from '@/redux/slices/queryParams';

const CategoryItem: FC<CategoryItemProps> = ({ id, name, onClose }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFilterChange = () => {
    dispatch(
      addFilterItem({
        filterName: 'categories',
        attributes: { id, name },
        isClean: true,
      })
    );
    navigate(`/catalog?categories=${id}`);
    onClose();
  };
  return <p onClick={handleFilterChange}>{name}</p>;
};

export default CategoryItem;
