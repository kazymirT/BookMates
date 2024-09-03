import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
type Category = { name: string; id: number } | null;
type AdminState = {
  bookId: number | null;
  category: Category;
  clientId: number | null;
  orderId: string | null;
};

const initialState: AdminState = {
  bookId: null,
  category: null,
  clientId: null,
  orderId: null,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  selectors: {
    bookId: (state) => state.bookId,
    category: (state) => state.category,
    clientId: (state) => state.clientId,
    orderId: (state) => state.orderId,
  },
  reducers: {
    setBookId: (state, action: PayloadAction<number | null>) => {
      state.bookId = action.payload;
    },
    setCategoryId: (state, action: PayloadAction<Category>) => {
      state.category = action.payload;
    },
    setClientId: (state, action: PayloadAction<number | null>) => {
      state.clientId = action.payload;
    },
    setOrderId: (state, action: PayloadAction<string | null>) => {
      state.orderId = action.payload;
    },
  },
});

export const { setBookId, setCategoryId, setClientId, setOrderId } =
  adminSlice.actions;
export const { bookId, category, clientId, orderId } = adminSlice.selectors;
export const userData = (state: RootState) => state.user;
export default adminSlice.reducer;
