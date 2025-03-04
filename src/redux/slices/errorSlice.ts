import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

export type ErrorState = {
  login: { code: number; message: string } | null;
  register: { code: number; message: string } | null;
  verifyEmail: { code: number; message: string } | null;
  resetPassword: { code: number; message: string } | null;
};

const initialState: ErrorState = {
  verifyEmail: null,
  login: null,
  register: null,
  resetPassword: null,
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
  },
});

export const {
  setLoginError,
  setRegisterError,
  setResetPasswordError,
  setVerifyEmailError,
} = ErrorSlice.actions;
export const errorState = (state: RootState) => state.error;
export default ErrorSlice.reducer;
