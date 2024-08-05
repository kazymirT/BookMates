import { SORT_OPTIONS_URL } from './constants';

export const initializeQueryState = () => {
  const params = new URLSearchParams(window.location.search);
  const newState = {
    sort: SORT_OPTIONS_URL[params.get('sort') || ''] || 'За популярністю',
    filter: {
      categories:
        params
          .get('categories')
          ?.split('_')
          .map((lang) => SORT_OPTIONS_URL[lang]) || [],
      language:
        params
          .get('language')
          ?.split('_')
          .map((lang) => SORT_OPTIONS_URL[lang]) || [],
      price: params.get('price')?.split('-') || [],
      years: params.get('years')?.split('-') || [],
    },
    search: params.get('search') || undefined,
    page: params.get('page') || '1',
  };
  return newState;
};
