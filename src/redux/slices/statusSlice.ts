import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

type StatusState = {
  status: 'idle' | 'loading' | 'succes' | 'error';
};

const initialState: StatusState = {
  status: 'idle',
};

type ActionPayload = StatusState['status'];

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    toggleStatus: (state, action: PayloadAction<ActionPayload>) => {
      state.status = action.payload;
    },
  },
});

export const { toggleStatus } = statusSlice.actions;
export const status = (state: RootState) => state.status.status;
export default statusSlice.reducer;
