import { baseNewApi } from './baseNewApi';
import {
  Login,
  Register,
  RegisterResponse,
  LoginResponse,
  VerifyEmailResponse,
  ErrorResponse,
} from './services.types';
import { setLoginError, setRegisterError } from '../slices/errorSlice';
import { toggleModal } from '../slices/modalSlice';
import { toggleStatus } from '../slices/statusSlice';
import { login, setPendingLoginData } from '../slices/userSlice';

export interface NewPassword {
  code: string;
  newPassword: string;
}

export interface ForgetPassword {
  email: string;
}

export const authApi = baseNewApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, Login>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(toggleStatus('loading'));
        try {
          const { data } = (await queryFulfilled) as { data: LoginResponse };
          dispatch(
            login({ accessToken: data.accessToken, user: data.loggedInUser })
          );
          dispatch(toggleModal({ openedModalType: null }));
          dispatch(toggleStatus('succes'));
        } catch (error) {
          dispatch(toggleStatus('idle'));
          const {
            error: {
              status,
              data: { message },
            },
          } = error as ErrorResponse;
          if (status === 401) {
            dispatch(setLoginError({ code: status, message }));
          }
          if (status === 400) {
            dispatch(
              setPendingLoginData({
                email: arg.email,
                password: arg.password,
              })
            );
            dispatch(toggleModal({ openedModalType: 'device-code' }));
          }
        }
      },
    }),
    register: builder.mutation<RegisterResponse, Register>({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(toggleStatus('loading'));
        try {
          await queryFulfilled;
          dispatch(toggleStatus('idle'));
          dispatch(toggleModal({ openedModalType: 'register-success' }));
        } catch (error) {
          dispatch(toggleStatus('idle'));
          const {
            error: {
              status,
              data: { message },
            },
          } = error as ErrorResponse;
          if (status === 409) {
            dispatch(setRegisterError({ code: status, message }));
          }
        }
      },
    }),
    verifyEmail: builder.mutation<VerifyEmailResponse, { code: string }>({
      query: (body) => ({
        url: '/auth/verify-email',
        method: 'PATCH',
        body,
      }),
    }),
    forgetPassword: builder.mutation<string, ForgetPassword>({
      query: (body) => ({
        url: '/forget-password',
        method: 'PATCH',
        body,
      }),
    }),
    setNewPassword: builder.mutation<string, NewPassword>({
      query: (body) => ({
        url: '/set-new-password',
        method: 'PATCH',
        body,
      }),
    }),
    logout: builder.mutation<string, undefined>({
      query: () => ({
        url: '/logout',
        method: 'PATCH',
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyEmailMutation,
  useForgetPasswordMutation,
  useLogoutMutation,
  useSetNewPasswordMutation,
} = authApi;
