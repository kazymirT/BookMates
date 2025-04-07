import { FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BaseQueryFn } from '@reduxjs/toolkit/query/react';

import { authApi } from './auth';
import { login } from '../slices/userSlice';
import { RootState } from '../store';

const baseURLApi = import.meta.env.VITE_API_BASE_NEW_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: baseURLApi,
  credentials: 'include',

  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.accessToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});
export type RefreshResponse = {
  accessToken: string;
};

const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  const user = (api.getState() as RootState).user.user;
  if (result.error) {
    console.log(result.error, 'перехоплювач глобальний');
  }
  if (result?.error?.status === 401 && user) {
    const refreshResult = await baseQuery(
      {
        url: '/auth/refresh-token',
        method: 'POST',
      },
      api,
      extraOptions
    );
    if (refreshResult?.data) {
      const { accessToken } = refreshResult.data as RefreshResponse;

      api.dispatch(login({ accessToken, user }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(authApi.endpoints.logout.initiate());
    }
  }
  return result;
};

export const baseNewApi = createApi({
  reducerPath: 'baseNewApi',
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});
