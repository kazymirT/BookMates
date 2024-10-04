import { baseApi } from './baseApi';
import { type ChangeImage } from './services.types';

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
  }),
  overrideExisting: false,
});

export const {
  useAddBookMutation,
  useDeleteBookByIdMutation,
  useChangeImageMutation,
} = AdminBookApi;
