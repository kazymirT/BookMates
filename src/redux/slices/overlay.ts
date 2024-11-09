import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

type OverlayState = {
  openCount: number;
};

const initialState: OverlayState = {
  openCount: 0,
};

export const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    incrementOverlay: (state) => {
      state.openCount += 1;
    },
    decrementOverlay: (state) => {
      state.openCount = Math.max(state.openCount - 1, 0);
    },
  },
});

export const { incrementOverlay, decrementOverlay } = overlaySlice.actions;
export const isActive = (state: RootState) => state.overlay.openCount > 0;
export default overlaySlice.reducer;
