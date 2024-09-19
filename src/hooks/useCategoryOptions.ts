import { useMemo } from 'react';

import { useGetCategoryAllQuery } from '@/redux/services/category';

export const useCategoryOptions = () => {
  const { data: allCategories = [] } = useGetCategoryAllQuery();

  const categoriesOptions = useMemo(
    () => allCategories.map(({ name }) => ({ label: name, value: name })),
    [allCategories]
  );

  return categoriesOptions;
};
