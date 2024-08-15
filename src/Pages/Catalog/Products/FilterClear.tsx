import styles from './FilterClear.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  clearFilters,
  FilterType,
  queryAllData,
  removeFilterItem,
  setPrice,
  setSearch,
} from '@/redux/slices/queryParams';

const FilterClear = () => {
  const {
    filter: { categories, language, price, years },
    search,
  } = useAppSelector(queryAllData);
  const dispatch = useAppDispatch();

  const handleOnClear = (filterName: keyof FilterType, value: string) => {
    dispatch(removeFilterItem({ filterName, value }));
  };

  // Створення загального списку фільтрів для очищення
  const filters: { filterName: keyof FilterType; value: string }[] = [
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
              buttonType={ButtonType.Button}
              size={Sizes.ExtraSmall}
              text="Очистити"
              variant={Variant.Label}
              onClick={() => dispatch(clearFilters())}
            />
          )}
          <div className={styles.filters}>
            {!!filters.length &&
              filters.map((filter) => (
                <Button
                  key={filter.filterName + filter.value}
                  buttonType={ButtonType.Button}
                  size={Sizes.ExtraSmall}
                  text={filter.value}
                  variant={Variant.LabelX}
                  onClick={() => handleOnClear(filter.filterName, filter.value)}
                />
              ))}
            {priceFilter && (
              <Button
                key={priceFilter}
                buttonType={ButtonType.Button}
                size={Sizes.ExtraSmall}
                text={priceFilter}
                variant={Variant.LabelX}
                onClick={() => dispatch(setPrice([]))}
              />
            )}
            {search && (
              <Button
                key={search}
                buttonType={ButtonType.Button}
                size={Sizes.ExtraSmall}
                text={search}
                variant={Variant.LabelX}
                onClick={() => dispatch(setSearch(''))}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FilterClear;
