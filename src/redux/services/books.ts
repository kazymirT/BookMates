import { baseApi } from './baseApi';
import { BookById, BooksArgs, BooksListResponse } from './services.types';

export const booksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<BooksListResponse, BooksArgs>({
      query: ({
        page = 1,
        size = 9,
        sort = [''],
        search = '',
        price = [],
        language = [],
        categories = [],
        years = [],
      }) => ({
        url: `/open/book/list?page=${page}&size=${size}&sort=${sort}&title=${search}&price=${price.join(',')}&language=${language.join(',')}&year=${years.join(',')}&category=${categories.join(',')}`,
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
