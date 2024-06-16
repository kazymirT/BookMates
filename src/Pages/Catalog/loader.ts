import { LoaderFunctionArgs } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loader = (params: LoaderFunctionArgs<any>) => {
  const url = new URL(params.request.url);
  const sort = url.searchParams.get('sort') || 'За популярністю';
  const page = url.searchParams.get('page') || '0';
  const size = url.searchParams.get('size') || '9';
  return {
    page: Number(page) - 1,
    size,
    sort: sort,
    url: params.request.url,
    categoryId: params.params.categoryId || '',
  };
};
