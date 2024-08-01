import { baseApi } from './baseApi';
import { BookById, BooksArgs, BooksListResponse } from './services.types';

export const booksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getBooks: builder.query<BooksListResponse, BooksArgs>({
    //   query: ({ page = 0, size = 9, sort = [''], categoryId = '' }) => ({
    //     url: `/open/book/_list?page=${page}&size=${size}&sort=${sort}&category=${categoryId}`,
    //     method: 'POST',
    //   }),
    // }),
    getBooks: builder.query<BooksListResponse, BooksArgs>({
      query: ({ page = 1, size = 9, sort = [''], categoryId = '' }) => ({
        url: `/open/book/list?page=${page}&size=${size}&sort=${sort}&category=${categoryId}`,
      }),
    }),
    getBookById: builder.query<BookById, string>({
      query: (id) => ({
        url: `/open/book/${id}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetBooksQuery, useGetBookByIdQuery } = booksApi;
