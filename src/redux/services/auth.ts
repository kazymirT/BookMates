import { baseNewApi } from './baseNewApi';
import {
  Login,
  Register,
  RegisterResponse,
  LoginResponse,
  VerifyEmailResponse,
  ErrorResponse,
} from './services.types';
import {
  setDeviceCodeError,
  setIsDeviceCode,
  setLoginError,
  setNewPasswordError,
  setRegisterError,
  setResetPasswordError,
} from '../slices/errorSlice';
import { toggleModal } from '../slices/modalSlice';
import { toggleStatus } from '../slices/statusSlice';
import { login, logout } from '../slices/userSlice';
import { RootState } from '../store';

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
      async onQueryStarted(_, { dispatch, queryFulfilled, getState }) {
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
            const isDeviceCode = (getState() as RootState)?.error.isDeviceCode;
            if (isDeviceCode) {
              dispatch(setDeviceCodeError({ code: status, message }));
            } else {
              dispatch(setIsDeviceCode(true));
            }
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
        url: '/auth/forget-password',
        method: 'PATCH',
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(toggleStatus('loading'));
        try {
          await queryFulfilled;
          dispatch(toggleModal({ openedModalType: 'new-password' }));
        } catch (error) {
          const {
            error: {
              status,
              data: { message },
            },
          } = error as ErrorResponse;
          if (status === 404) {
            dispatch(
              setResetPasswordError({
                code: status,
                message,
              })
            );
          }
        } finally {
          dispatch(toggleStatus('idle'));
        }
      },
    }),
    setNewPassword: builder.mutation<string, NewPassword>({
      query: (body) => ({
        url: '/auth/set-new-password',
        method: 'PATCH',
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(toggleStatus('loading'));
        try {
          await queryFulfilled;
          dispatch(toggleModal({ openedModalType: 'login' }));
        } catch (error) {
          const {
            error: {
              status,
              data: { message },
            },
          } = error as ErrorResponse;
          if (status === 400) {
            dispatch(
              setNewPasswordError({
                code: status,
                message,
              })
            );
          }
        } finally {
          dispatch(toggleStatus('idle'));
        }
      },
    }),
    logout: builder.mutation<string, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'PATCH',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logout());
        } catch (error) {
          console.log('error server or token');
        }
      },
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
