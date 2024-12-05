import { AllAttributes } from '@/redux/services/services.types';
import { FilterType } from '@/redux/slices/queryParams';

const setChecked = (arr: { id: number; name: string }[]) =>
  arr.map((a) => ({ ...a, checked: false }));

const getUpdatedFilter = (
  filters: { id: number; name: string }[],
  filterItems: { id: number; name: string; checked: boolean }[]
) => {
  if (!filters) return { updatedItems: filterItems, count: 0 };

  let count = 0;
  const updatedItems = filterItems.map((item) => {
    const isChecked = filters.some((filter) => filter.name === item.name);
    if (isChecked) count++;
    return { ...item, checked: isChecked };
  });

  return { updatedItems, count };
};

export const updateFilterParams = (
  filter: FilterType,
  price: string[],
  attributes: AllAttributes
) => {
  const { categories, language, years } = filter;

  const { updatedItems: newLanguage, count: languageCount } = getUpdatedFilter(
    language,
    setChecked(attributes.languages)
  );
  const { updatedItems: newYears, count: yearsCount } = getUpdatedFilter(
    years,
    setChecked(attributes.years)
  );
  const { updatedItems: newCategories, count: categoriesCount } =
    getUpdatedFilter(categories, setChecked(attributes.categories));

  const newPrice = price.join('')
    ? [Number(price[0]), Number(price[1])]
    : [0, 2000];

  return {
    price: newPrice,
    years: { items: newYears.sort((a, b) => b.id - a.id), count: yearsCount },
    categories: { items: newCategories, count: categoriesCount },
    language: { items: newLanguage, count: languageCount },
  };
};
