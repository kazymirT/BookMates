import { baseNewApi } from './baseNewApi';
import {
  Login,
  Register,
  RegisterResponse,
  LoginResponse,
  VerifyEmailResponse,
} from './services.types';
import { setLoginError, setRegisterError } from '../slices/errorSlice';
import { toggleModal } from '../slices/modalSlice';
import { toggleStatus } from '../slices/statusSlice';
import { login, setPendingLoginData } from '../slices/userSlice';
export interface ErrorResponse {
  error: {
    data: {
      message: string;
      error: string;
      statusCode: number;
    };
    status: number;
  };
}

export interface LoginWithCode extends Login {
  newDeviceCode?: string;
}
export const authApi = baseNewApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, Login>({
      query: (body) => ({
        url: 'v1/auth/login',
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
            console.log('config device');
          }
        }
      },
    }),
    loginWithCode: builder.mutation<LoginResponse, LoginWithCode>({
      query: (body) => ({
        url: 'v1/auth/login',
        method: 'POST',
        body: {
          body,
        },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
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
            dispatch(toggleModal({ openedModalType: 'device-code' }));
            console.log('config device');
          }
        }
      },
    }),
    register: builder.mutation<RegisterResponse, Register>({
      query: (body) => ({
        url: 'v1/auth/register',
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
        url: 'v1/auth/verify-email',
        method: 'PATCH',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLoginWithCodeMutation,
  useVerifyEmailMutation,
} = authApi;
