import { baseNewApi } from './baseNewApi';
import {
  BookById,
  BooksArgsNew,
  BooksResponse,
  SearchBooks,
} from './services.types';

export const booksApi = baseNewApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<BooksResponse, BooksArgsNew>({
      query: ({
        lang = 'ua',
        years = [],
        languages = [],
        minPrice = null,
        maxPrice = null,
        sortOptions,
        limit = 16,
        page = 1,
        categoryId,
        searchQuery,
      }) => ({
        url: `book?lang=${lang}&page=${page}&limit=${limit}&categoryId=${categoryId}&years=${years.join(',')}&languageIds=${languages.join(',')}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortOptions=${sortOptions}${searchQuery ? `&searchQuery=${searchQuery}` : ''}`,
      }),
    }),
    getBookById: builder.query<BookById, { id: string; lang: string }>({
      query: ({ id, lang }) => ({
        url: `/book/${id}?lang=${lang}`,
      }),
    }),
    getSearch: builder.query<SearchBooks, { query: string; lang: string }>({
      query: ({ query, lang }) => ({
        url: `/book/search?query=${query}&lang=${lang}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetBooksQuery, useGetBookByIdQuery, useGetSearchQuery } =
  booksApi;
