import { baseApi } from './baseApi';
import { UserResponse } from './services.types';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<UserResponse, string>({
      query: (id) => ({
        url: `open/user/${id}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserQuery } = userApi;
