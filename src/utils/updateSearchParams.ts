export const updateSearchParams = (paramName: string, paramValue: string) => {
  const params = new URLSearchParams(window.location.search);

  if (paramValue && paramName !== 'page') {
    params.set(paramName, paramValue);
    params.set('page', '1');
  } else {
    params.set(paramName, paramValue);
  }

  const newUrl = params.toString()
    ? `${window.location.pathname}?${params}`
    : window.location.pathname;

  window.history.pushState({}, '', newUrl);
};
