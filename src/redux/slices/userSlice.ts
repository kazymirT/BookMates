import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

export type User = {
  id: number;
  role: 'user' | 'admin';
  firstName: string;
  lastName: string;
  email: string;
  image: null | string;
  isLoggedIn: boolean;
  isVerifyEmail: boolean;
};

type UserState = {
  user: User | null;
  accessToken: string | null;
  pendingLoginData: { email: string; password: string } | null;
};

const initialState: UserState = {
  accessToken: null,
  user: null,
  pendingLoginData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  selectors: {
    token: (state) => state.accessToken,
    userId: (state) => state.user?.id,
  },
  reducers: {
    login: (
      state,
      action: PayloadAction<Omit<UserState, 'pendingLoginData'>>
    ) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
    },
    setPendingLoginData(
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) {
      state.pendingLoginData = action.payload;
    },
    clearPendingLoginData(state) {
      state.pendingLoginData = null;
    },
  },
});

export const { login, logout, clearPendingLoginData, setPendingLoginData } =
  userSlice.actions;
export const { userId } = userSlice.selectors;
export const userData = (state: RootState) => state.user;
export default userSlice.reducer;
