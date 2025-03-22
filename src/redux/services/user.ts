import { baseNewApi } from './baseNewApi';
import { UserResponse } from './services.types';

export const userApi = baseNewApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteUser: builder.mutation<UserResponse, number>({
      query: (id) => ({
        url: `/user/${id}`,
        method: 'DELETE',
      }), // TODO: Перевірити чи працює
    }),
    meUser: builder.mutation<UserResponse, { user: string }>({
      query: () => ({
        url: `/user/me`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useDeleteUserMutation, useMeUserMutation } = userApi;
// HACK: dsdsdsdsd
