import { useTranslation } from 'react-i18next';

import styles from './FilterClear.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { MetaAttributes } from '@/redux/services/meta';
import {
  clearFilters,
  FilterType,
  queryAllData,
  removeFilterItem,
  setPrice,
  setSearch,
} from '@/redux/slices/queryParams';

const FilterClear = () => {
  const { t, i18n } = useTranslation();
  const {
    filter: { categories, language, years },
    search,
    price,
  } = useAppSelector(queryAllData);
  const dispatch = useAppDispatch();

  const handleOnClear = (
    filterName: keyof FilterType,
    value: MetaAttributes
  ) => {
    dispatch(removeFilterItem({ filterName, attributes: value }));
  };
  const isEnglish = i18n.language === 'en';
  const filters: {
    filterName: keyof FilterType;
    value: MetaAttributes;
  }[] = [
    ...categories.map((category) => ({
      filterName: 'categories' as const,
      value: category,
    })),
    ...language.map((lang) => ({
      filterName: 'language' as const,
      value: lang,
    })),
    ...years.map((year) => ({
      filterName: 'years' as const,
      value: year,
    })),
  ];
  const priceFilter = price.join(' - ');
  return (
    <>
      {(!!filters.length || priceFilter || search) && (
        <div className={styles.clear}>
          {(!!filters.length || priceFilter || search) && (
            <Button
              type="button"
              size={Sizes.ExtraSmall}
              text={t('catalog.clear-filter')}
              variant={Variant.Label}
              onClick={() => dispatch(clearFilters())}
            />
          )}
          {!!filters.length &&
            filters.map(({ filterName, value }) => (
              <Button
                key={filterName + value.nameEN}
                type="button"
                size={Sizes.ExtraSmall}
                text={isEnglish ? value.nameEN : value.nameUA}
                variant={Variant.LabelX}
                onClick={() => handleOnClear(filterName, value)}
              />
            ))}
          {priceFilter && (
            <Button
              key={priceFilter}
              type="button"
              size={Sizes.ExtraSmall}
              text={priceFilter}
              variant={Variant.LabelX}
              onClick={() => dispatch(setPrice([]))}
            />
          )}
          {search && (
            <Button
              key={search}
              type="button"
              size={Sizes.ExtraSmall}
              text={search}
              variant={Variant.LabelX}
              onClick={() => dispatch(setSearch(''))}
            />
          )}
        </div>
      )}
    </>
  );
};

export default FilterClear;
