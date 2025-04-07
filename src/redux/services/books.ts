import { baseNewApi } from './baseNewApi';
import { BookById, BooksArgsNew, BooksResponse } from './services.types';
export const booksApi = baseNewApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<BooksResponse, BooksArgsNew>({
      query: ({
        lang = 'ua',
        years = [],
        languages = [],
        minPrice = null,
        maxPrice = null,
        sortPrice = 'ASC',
        isNew = false,
        alphabetical = false,
        limit = 16,
        page = 1,
        categoryId,
      }) => ({
        url: `book?lang=${lang}&page=${page}&limit=${limit}&categoryId=${categoryId}&years=${years.join(',')}&languageIds=${languages.join(',')}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortPrice=${sortPrice}&new=${isNew}&alphabetical=${alphabetical}`,
      }),
    }),
    getBookById: builder.query<BookById, { id: string; lang: string }>({
      query: ({ id, lang }) => ({
        url: `/book/${id}?lang=${lang}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetBooksQuery, useGetBookByIdQuery } = booksApi;
