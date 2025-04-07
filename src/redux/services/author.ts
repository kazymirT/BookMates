import { baseNewApi } from './baseNewApi';
import { Book } from './services.types';

export type Lang = 'en' | 'ua';

export interface AuthorsByIdArgs {
  id: number | string;
  lang: Lang;
}

export interface AuthorById {
  id: number;
  name: string;
  books: Book[];
}

export interface AuthorList {
  id: number;
  name: string;
  bookCount: number;
}

export const authorApi = baseNewApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAuthors: builder.query<AuthorList[], Lang>({
      query: (lang) => ({
        url: `/author?lang=${lang}`,
      }),
    }),
    getAuthorById: builder.query<AuthorById, AuthorsByIdArgs>({
      query: ({ lang, id }) => ({
        url: `/author/${id}?lang=${lang}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllAuthorsQuery, useGetAuthorByIdQuery } = authorApi;
