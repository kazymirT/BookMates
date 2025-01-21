import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './FilterContent.module.scss';
import Filter from '../Filter/Filter';
import PriceFilter from '../PriceFilter/PriceFilter';
import Sort from '../Sort/Sort';
import Title from '../Title/Title';
import DropDown from '@/components/ui-components/Dropdown/DropDown';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { type AllAttributes } from '@/redux/services/services.types';
import { clearFilters, initializeState } from '@/redux/slices/queryParams';
import { queryAllData } from '@/redux/slices/queryParams';
import { initializeQueryState } from '@/utils/initializeQueryState';
import { updateFilterParams } from '@/utils/updateFilterParams';
interface FilterContentProps {
  attributes: AllAttributes;
}

const FilterContent: FC<FilterContentProps> = ({ attributes }) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const clearFilter = () => dispatch(clearFilters());

  useEffect(() => {
    const newState = initializeQueryState(attributes);
    dispatch(initializeState(newState));
  }, [attributes, dispatch]);

  const { filter, price: priceChecked } = useAppSelector(queryAllData);

  const { language, price, years } = updateFilterParams(
    filter,
    priceChecked,
    attributes
  );
  return (
    <div className={styles.content}>
      <div className={styles.filters}>
        <Filter
          title={
            language.count !== 0
              ? t('catalog.filter.languageWithCount', { count: language.count })
              : t('catalog.filter.language')
          }
          filterType="language"
          categories={language.items}
        />
        <Filter
          title={
            years.count !== 0
              ? t('catalog.filter.yearsWithCount', { count: years.count })
              : t('catalog.filter.years')
          }
          filterType="years"
          categories={years.items}
        />
        <DropDown
          variant="filter"
          control={(toggleOpen, isOpen) => (
            <Title
              text={t('catalog.filter.price', {
                price1: price[0],
                price2: price[1],
              })}
              isOpen={isOpen}
              toggleOpen={toggleOpen}
            />
          )}
          options={(toggleOpen) => (
            <PriceFilter onClose={toggleOpen} price={price} />
          )}
        />
        <Sort />
      </div>
      <button type="button" onClick={clearFilter} className={styles.clear}>
        {t('catalog.clear-filter')}
      </button>
    </div>
  );
};

export default FilterContent;
