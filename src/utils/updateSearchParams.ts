import { SORT_OPTIONS_URL } from './constants';

export const updateSearchParams = (paramName: string, paramValue: string[]) => {
  const params = new URLSearchParams(window.location.search);
  if (paramName === 'page') {
    params.set(paramName, paramValue.join(''));
  } else if (
    paramName === 'sort' ||
    paramName === 'language' ||
    paramName === 'categories'
  ) {
    params.set(
      paramName,
      paramValue.map((arr) => SORT_OPTIONS_URL[arr]).join('_')
    );
    params.set('page', '1');
  } else {
    params.set(paramName, paramValue.join('-'));
    params.set('page', '1');
  }
  if (!paramValue.join().length) {
    params.delete(paramName);
  }
  const newUrl = params.toString()
    ? `${window.location.pathname}?${params}`
    : window.location.pathname;

  window.history.pushState({}, '', newUrl);
};
export const deleteSearchParams = () => {
  window.history.pushState({}, '', window.location.pathname);
};
