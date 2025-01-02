export const updateSearchParams = (
  paramName: string,
  paramValue: number[] | string[]
) => {
  const params = new URLSearchParams(window.location.search);

  if (paramValue.length === 0) {
    params.delete(paramName);
  } else {
    const joinedValue = Array.isArray(paramValue)
      ? paramValue.join('-')
      : paramValue;
    params.set(paramName, joinedValue);

    if (paramName !== 'page') {
      params.set('page', '1');
    }
  }

  const newUrl = params.toString()
    ? `${window.location.pathname}?${params}`
    : window.location.pathname;

  window.history.pushState({}, '', newUrl);
};

export const deleteSearchParams = () => {
  window.history.pushState({}, '', window.location.pathname);
};
