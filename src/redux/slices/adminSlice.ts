import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

type AdminState = {
  bookId: number | null;
  categoryId: number | null;
  clientId: number | null;
  orderId: number | null;
};

const initialState: AdminState = {
  bookId: null,
  categoryId: null,
  clientId: null,
  orderId: null,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  selectors: {
    bookId: (state) => state.bookId,
    categoryId: (state) => state.categoryId,
    clientId: (state) => state.clientId,
    orderId: (state) => state.orderId,
  },
  reducers: {
    setBookId: (state, action: PayloadAction<number | null>) => {
      state.bookId = action.payload;
    },
    setCategoryId: (state, action: PayloadAction<number | null>) => {
      state.categoryId = action.payload;
    },
    setClientId: (state, action: PayloadAction<number | null>) => {
      state.clientId = action.payload;
    },
    setOrderId: (state, action: PayloadAction<number | null>) => {
      state.orderId = action.payload;
    },
  },
});

export const { setBookId, setCategoryId, setClientId, setOrderId } =
  adminSlice.actions;
export const { bookId, categoryId, clientId, orderId } = adminSlice.selectors;
export const userData = (state: RootState) => state.user;
export default adminSlice.reducer;
