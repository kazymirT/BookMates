import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { CategoryItemProps } from './types';
import { useAppDispatch } from '@/redux/hooks';
import { addFilterItem } from '@/redux/slices/queryParams';

const CategoryItem: FC<CategoryItemProps> = ({ category, onClose }) => {
  const { id, nameEN, nameUA } = category;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const handleFilterChange = () => {
    dispatch(
      addFilterItem({
        filterName: 'categories',
        attributes: category,
        isClean: true,
      })
    );
    navigate(`/catalog?categories=${id}`);
    onClose();
  };
  return (
    <button onClick={handleFilterChange}>
      {i18n.language === 'en' ? nameEN : nameUA}
    </button>
  );
};

export default CategoryItem;
