import { jwtDecode } from 'jwt-decode';

import { baseApi } from './baseApi';
import {
  AuthResponse,
  TokenDecode,
  Error,
  Login,
  Register,
} from './services.types';
import { userApi } from './user';
import { toggleModal } from '../slices/modalSlice';
import { toggleStatus } from '../slices/statusSlice';
import { login } from '../slices/userSlice';
import { AppDispatch } from '../store';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, Login>({
      query: (body) => ({
        url: 'open/auth/login',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(toggleStatus('loading'));
        try {
          const { data } = (await queryFulfilled) as { data: AuthResponse };
          handleAuthSuccess(data, dispatch);
          dispatch(toggleStatus('succes'));
        } catch (error) {
          dispatch(toggleStatus('idle'));
          handleAuthError(error as Error);
        }
      },
    }),
    register: builder.mutation<AuthResponse, Register>({
      query: (body) => ({
        url: 'open/auth/register',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(toggleStatus('loading'));
        try {
          const { data } = (await queryFulfilled) as { data: AuthResponse };
          handleAuthSuccess(data, dispatch);
          dispatch(toggleStatus('succes'));
        } catch (error) {
          dispatch(toggleStatus('idle'));
          handleAuthError(error as Error);
        }
      },
    }),
  }),
  overrideExisting: false,
});

const handleAuthSuccess = async (data: AuthResponse, dispatch: AppDispatch) => {
  const { id, roles } = jwtDecode(data.token) as TokenDecode;
  const user = (await dispatch(userApi.endpoints.getUser.initiate(id))).data;
  user &&
    dispatch(
      login({
        token: data.token,
        user: {
          id,
          role: roles[0],
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      })
    );
  dispatch(toggleModal({ openedModalType: null }));
};

// eslint-disable-next-line no-console
const handleAuthError = ({ data }: Error) => console.error(data);

export const { useLoginMutation, useRegisterMutation } = authApi;
