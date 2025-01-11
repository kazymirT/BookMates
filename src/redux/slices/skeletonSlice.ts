import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

type SkeletonState = {
  isLoading: boolean;
};

const initialState: SkeletonState = {
  isLoading: true,
};

export const skeletonSlice = createSlice({
  name: 'skeleton',
  initialState,
  reducers: {
    toggleLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleLoading } = skeletonSlice.actions;
export const isLoading = (state: RootState) => state.skeleton.isLoading;
export default skeletonSlice.reducer;
