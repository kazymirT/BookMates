import { baseApi } from './baseApi';
import { type ChangeImage } from './services.types';
import { EditBookValues } from '@/utils/validateSchema';
export interface EditBook {
  book: EditBookValues;
  id: number;
}
export const AdminBookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation<string, FormData>({
      query: (body) => ({
        url: 'admin/book/add-book',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Books', 'Attributes'],
    }),
    deleteBookById: builder.mutation<string, number>({
      query: (id) => ({
        url: `admin/book/delete-book/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books', 'Attributes'],
    }),
    changeImage: builder.mutation<string, ChangeImage>({
      query: ({ id, body }) => ({
        url: `admin/book/change-image?id=${id}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Books'],
    }),
    editBookById: builder.mutation<string, EditBook>({
      query: ({ book, id }) => ({
        url: `admin/${id}`,
        method: 'PUT',
        body: book,
        responseHandler: (response) => response.text(),
      }),
      invalidatesTags: ['Books'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAddBookMutation,
  useDeleteBookByIdMutation,
  useChangeImageMutation,
  useEditBookByIdMutation,
} = AdminBookApi;
