import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
        title={t('catalog.filter.categories')}
        categories={categories}
        filterType="categories"
        isDefaultOpen
      />
      <Filter
        title={t('catalog.filter.language')}
        filterType="language"
        categories={language}
        isDefaultOpen
      />
      <PriceFilter
        title={t('catalog.filter.price')}
        isDefaultOpen
        price={price}
      />
    </>
  );
};

export default FilterContent;
