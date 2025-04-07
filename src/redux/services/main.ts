import { baseNewApi } from './baseNewApi';
import { BooksMainPage } from './services.types';

export const mainApi = baseNewApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooksForMain: builder.query<BooksMainPage, { lang: string }>({
      query: ({ lang }) => ({
        url: `/book/main-page-data?lang=${lang}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetBooksForMainQuery } = mainApi;
