import { FILTERS } from './fake';
import { AllAttributes } from '@/redux/services/services.types';
import { FilterType } from '@/redux/slices/queryParams';

const setChecked = (arr: { id: number; name: string }[]) =>
  arr.map((a) => ({ ...a, checked: false }));

const getUpdatedFilter = (
  filters: { id: number; name: string }[],
  filterItems: { id: number; name: string; checked: boolean }[]
) => {
  if (!filters) return filterItems;
  return filterItems.map((item) => ({
    ...item,
    checked: filters.some((filter) => filter.name === item.name),
  }));
};

export const updateFilterParams = (
  filter: FilterType,
  price: string[],
  attributes: AllAttributes
) => {
  const { categories, language } = filter;

  const newLanguage = getUpdatedFilter(
    language,
    setChecked(attributes.languages)
  );
  // const newYears = getUpdatedFilter(years, FILTERS.years);
  const newCategories = getUpdatedFilter(
    categories,
    setChecked(attributes.categories)
  );
  const newPrice = price.join('')
    ? [Number(price[0]), Number(price[1])]
    : FILTERS.price;
  return {
    price: newPrice,
    // years: newYears,
    categories: newCategories,
    language: newLanguage,
  };
};
