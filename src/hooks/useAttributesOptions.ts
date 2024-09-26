import { useMemo } from 'react';

import { useGetAllAttributesQuery } from '@/redux/services/attributes';

export const useAttributesOptions = () => {
  const { data: attributes = { authors: [], categories: [], languages: [] } } =
    useGetAllAttributesQuery();

  const categoriesOptions = useMemo(
    () =>
      attributes.categories.map(({ name }) => ({ label: name, value: name })),
    [attributes.categories]
  );
  const languagesOptions = useMemo(
    () =>
      attributes.languages.map(({ name }) => ({ label: name, value: name })),
    [attributes.languages]
  );
  const authorsOptions = useMemo(
    () => attributes.authors.map(({ name }) => ({ label: name, value: name })),
    [attributes.authors]
  );

  return { categoriesOptions, languagesOptions, authorsOptions };
};
