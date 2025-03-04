import { baseNewApi } from './baseNewApi';
import { UserResponse } from './services.types';

export const userApi = baseNewApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteUser: builder.mutation<UserResponse, number>({
      query: (id) => ({
        url: `v1/user/${id}`,
        method: 'DELETE',
      }), //no working
    }),
    meUser: builder.mutation<UserResponse, { user: string }>({
      query: () => ({
        url: `v1/user/me`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useDeleteUserMutation, useMeUserMutation } = userApi;
