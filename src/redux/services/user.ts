import { baseNewApi } from './baseNewApi';
import { UserResponse } from './services.types';
import { logout } from '../slices/userSlice';

export const userApi = baseNewApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteUser: builder.mutation<UserResponse, void>({
      query: () => ({
        url: `/user/me`,
        method: 'DELETE',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logout());
        } catch (error) {
          console.log('error delete user');
        }
      },
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
