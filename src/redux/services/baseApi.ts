import { FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BaseQueryFn } from '@reduxjs/toolkit/query/react';

import { AuthResponse } from './services.types';
import { login, logout } from '../slices/userSlice';
import { RootState } from '../store';

const baseURLApi = import.meta.env.VITE_API_BASE_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: baseURLApi,

  // credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    // headers.set('Content-Type', 'application/json');
    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  const user = (api.getState() as RootState).user.user;

  if (result?.error?.status === 401 && user) {
    const refreshResult = await baseQuery('refresh', api, extraOptions);

    if (refreshResult?.data) {
      const { token } = refreshResult.data as AuthResponse;

      api.dispatch(login({ token, user }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Cart', 'Books', 'Category', 'Language', 'Author', 'Attributes'],
  endpoints: () => ({}),
});
