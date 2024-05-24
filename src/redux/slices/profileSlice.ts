import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

type ProfileState = {
  isOpen: boolean;
};

const initialState: ProfileState = {
  isOpen: false,
};

type ActionPayload = boolean;

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    toggleOpenProfile: (state, action: PayloadAction<ActionPayload>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleOpenProfile } = profileSlice.actions;
export const isOpen = (state: RootState) => state.profile.isOpen;
export default profileSlice.reducer;
