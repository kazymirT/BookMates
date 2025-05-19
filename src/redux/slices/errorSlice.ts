import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

export type Error = { code: number; message: string } | null;

export type LoginError = {
  isEmailConfirmed: Error;
  isUserFound: Error;
  isUnauthorized: Error;
};

export type ErrorState = {
  login: LoginError;
  register: Error;
  verifyEmail: Error;
  resetPassword: Error;
  newPassword: Error;
  deviceCode: Error;
  isDeviceCode: boolean;
  resendCode: Error;
  resendResetPassword: string | null;
};

const initialState: ErrorState = {
  verifyEmail: null,
  login: {
    isEmailConfirmed: null,
    isUnauthorized: null,
    isUserFound: null,
  },
  register: null,
  resetPassword: null,
  newPassword: null,
  deviceCode: null,
  isDeviceCode: false,
  resendCode: null,
  resendResetPassword: null,
};

type ActionPayload = {
  code: number;
  message: string;
} | null;

export const ErrorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setLoginError: (
      state,
      action: PayloadAction<{ type: keyof LoginError; error: Error }>
    ) => {
      const { error, type } = action.payload;
      state.login[type] = error;
    },
    setAllLoginError: (state) => {
      state.login.isEmailConfirmed = null;
      state.login.isUnauthorized = null;
      state.login.isUserFound = null;
    },
    setRegisterError: (state, action: PayloadAction<ActionPayload>) => {
      state.register = action.payload;
    },
    setVerifyEmailError: (state, action: PayloadAction<ActionPayload>) => {
      state.verifyEmail = action.payload;
    },
    setResetPasswordError: (state, action: PayloadAction<ActionPayload>) => {
      state.resetPassword = action.payload;
    },
    setNewPasswordError: (state, action: PayloadAction<ActionPayload>) => {
      state.newPassword = action.payload;
    },
    setDeviceCodeError: (state, action: PayloadAction<ActionPayload>) => {
      state.deviceCode = action.payload;
    },
    setResendCodeError: (state, action: PayloadAction<ActionPayload>) => {
      state.resendCode = action.payload;
    },
    setIsDeviceCode: (state, action: PayloadAction<boolean>) => {
      state.isDeviceCode = action.payload;
    },
    setResendResetPassword: (state, action: PayloadAction<string | null>) => {
      state.resendResetPassword = action.payload;
    },
  },
});

export const {
  setLoginError,
  setRegisterError,
  setResetPasswordError,
  setVerifyEmailError,
  setNewPasswordError,
  setDeviceCodeError,
  setIsDeviceCode,
  setResendCodeError,
  setAllLoginError,
  setResendResetPassword,
} = ErrorSlice.actions;
export const errorState = (state: RootState) => state.error;
export default ErrorSlice.reducer;
