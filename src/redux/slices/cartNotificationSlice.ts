import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

type CartNotificationState = {
  isOpen: boolean;
};

const initialState: CartNotificationState = {
  isOpen: false,
};

type ActionPayload = boolean;

export const cartNotification = createSlice({
  name: 'cartNotification',
  initialState,
  reducers: {
    toggleShowCartNotification: (
      state,
      action: PayloadAction<ActionPayload>
    ) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleShowCartNotification } = cartNotification.actions;
export const isOpen = (state: RootState) => state.cartNotification.isOpen;
export default cartNotification.reducer;
