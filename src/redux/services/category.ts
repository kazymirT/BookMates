import { baseApi } from './baseApi';
import { CategoryAll } from './services.types';

export const booksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategoryAll: builder.query<CategoryAll[], void>({
      query: () => ({
        url: `/open/category/all`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetCategoryAllQuery } = booksApi;
