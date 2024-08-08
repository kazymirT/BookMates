import { FILTERS } from './fake';
import { FilterType } from '@/redux/slices/queryParams';

export const updateFilterParams = ({
  categories,
  language,
  price,
  years,
}: FilterType) => {
  const getUpdatedFilter = (
    filters: string[],
    filterItems: { id: number; name: string; checked: boolean }[]
  ) => {
    if (!filters) return filterItems;
    return filterItems.map((item) => ({
      ...item,
      checked: filters.includes(item.name),
    }));
  };

  const newLanguage = getUpdatedFilter(language, FILTERS.language);
  const newYears = getUpdatedFilter(years, FILTERS.years);
  const newCategories = getUpdatedFilter(categories, FILTERS.categories);
  const newPrice = price.join('')
    ? [Number(price[0]), Number(price[1])]
    : FILTERS.price;
  return {
    price: newPrice,
    years: newYears,
    categories: newCategories,
    language: newLanguage,
  };
};
