import { baseApi } from './baseApi';
import { CategoryAll } from './services.types';

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategoryAll: builder.query<CategoryAll[], void>({
      query: () => ({
        url: `/open/category/all`,
      }),
      providesTags: ['Category'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetCategoryAllQuery } = categoryApi;
