import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

export type ErrorState = {
  login: { code: number; message: string } | null;
  register: { code: number; message: string } | null;
  verifyEmail: { code: number; message: string } | null;
  resetPassword: { code: number; message: string } | null;
  newPassword: { code: number; message: string } | null;
  deviceCode: { code: number; message: string } | null;
  isDeviceCode: boolean;
  resendCode: { code: number; message: string } | null;
};

const initialState: ErrorState = {
  verifyEmail: null,
  login: null,
  register: null,
  resetPassword: null,
  newPassword: null,
  deviceCode: null,
  isDeviceCode: false,
  resendCode: null,
};

type ActionPayload = {
  code: number;
  message: string;
} | null;

export const ErrorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setLoginError: (state, action: PayloadAction<ActionPayload>) => {
      state.login = action.payload;
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
} = ErrorSlice.actions;
export const errorState = (state: RootState) => state.error;
export default ErrorSlice.reducer;
