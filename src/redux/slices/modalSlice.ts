import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

type ModalState = {
  openedModalType: 'login' | 'create-account' | 'feedback' | null;
};

const initialState: ModalState = {
  openedModalType: 'login',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (
      state,
      action: PayloadAction<ModalState['openedModalType']>
    ) => {
      state.openedModalType = action.payload;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export const modalType = (state: RootState) => state.modal.openedModalType;
export default modalSlice.reducer;
