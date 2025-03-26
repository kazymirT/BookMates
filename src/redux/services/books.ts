import { baseNewApi } from './baseNewApi';
import {
  BookByIdNew,
  BooksArgsNew,
  BooksMainPage,
  BooksResponse,
} from './services.types';
export const booksApi = baseNewApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<BooksResponse, BooksArgsNew>({
      query: ({
        lang,
        years = [],
        languages = [],
        minPrice = '',
        maxPrice = '',
        sortPrice = 'ASC',
        isNew = false,
        alphabetical = false,
        limit = 16,
        page = 1,
      }) => ({
        url: `book?lang=${lang}&page=${page}&limit=${limit}&years=${years.join(',')}&languages=${languages.join(',')}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortPrice=${sortPrice}&new=${isNew}&alphabetical=${alphabetical}`,
      }),
    }),
    getBooksForMain: builder.query<BooksMainPage, { lang: string }>({
      query: ({ lang }) => ({
        url: `/book/main-page?lang=${lang}`,
      }),
    }),
    getBookById: builder.query<BookByIdNew, { id: string; lang: string }>({
      query: ({ id, lang }) => ({
        url: `/book/${id}?lang=${lang}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useGetBooksForMainQuery,
} = booksApi;
