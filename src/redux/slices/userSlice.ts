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
};

const initialState: UserState = {
  accessToken: null,
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  selectors: {
    token: (state) => state.accessToken,
    userId: (state) => state.user?.id,
  },
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const { userId } = userSlice.selectors;
export const userData = (state: RootState) => state.user;
export default userSlice.reducer;
