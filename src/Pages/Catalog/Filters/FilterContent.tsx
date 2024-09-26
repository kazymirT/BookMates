import { FC, useEffect } from 'react';

import Filter from './Filter/Filter';
import PriceFilter from './PriceFilter/PriceFilter';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { type AllAttributes } from '@/redux/services/services.types';
import { initializeState } from '@/redux/slices/queryParams';
import { queryAllData } from '@/redux/slices/queryParams';
import { initializeQueryState } from '@/utils/initializeQueryState';
import { updateFilterParams } from '@/utils/updateFilterParams';

interface FilterContentProps {
  attributes: AllAttributes;
}

const FilterContent: FC<FilterContentProps> = ({ attributes }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const newState = initializeQueryState(attributes);
    dispatch(initializeState(newState));
  }, [attributes, dispatch]);

  const { filter, price: priceChecked } = useAppSelector(queryAllData);

  const { categories, language, price } = updateFilterParams(
    filter,
    priceChecked,
    attributes
  );

  return (
    <>
      <Filter
        title="Категорії"
        categories={categories}
        filterType="categories"
        isDefaultOpen
      />
      <Filter
        title="Мова"
        filterType="language"
        categories={language}
        isDefaultOpen
      />
      <PriceFilter title="Ціна" isDefaultOpen price={price} />
    </>
  );
};

export default FilterContent;
