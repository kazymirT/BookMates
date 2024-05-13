import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { notStorePages } from '@/utils/constants';

type locationHistoryState = {
  history: {
    prev: string;
    beforePrev: string;
  };
};

const initialState: locationHistoryState = {
  history: {
    beforePrev: '',
    prev: '',
  },
};

export const locationHistorySlice = createSlice({
  name: 'locationHistory',
  initialState,
  reducers: {
    push: (state, action: PayloadAction<string>) => {
      if (!notStorePages.includes(action.payload)) {
        state.history.beforePrev = state.history.prev;
        state.history.prev = action.payload;
      }
    },
  },
});

export const { push } = locationHistorySlice.actions;
export const history = (state: RootState) => state.locationHistory.history;
export default locationHistorySlice.reducer;
