import { baseApi } from './baseApi';

export interface AddBook {
  // photo: string;
  title: string;
  categoryNames: string[];
  authorNames: string[];
  description: string;
  year: number;
  languageNames: string[];
  price: number;
  totalQuantity: number;
  discount: number;
  expected: boolean;
}

export const AdminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation<string, AddBook>({
      query: (body) => ({
        url: 'admin/book/add-book',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Books'],
    }),
    deleteBookById: builder.mutation<string, number>({
      query: (id) => ({
        url: `admin/book/delete-book/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books'],
    }),
  }),
  overrideExisting: false,
});

export const { useAddBookMutation, useDeleteBookByIdMutation } = AdminApi;
