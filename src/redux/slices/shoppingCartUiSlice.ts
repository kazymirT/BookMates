import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

type ShoppingCartUiState = {
  isFly: boolean;
  isOpenCart: boolean;
};

const initialState: ShoppingCartUiState = {
  isFly: false,
  isOpenCart: false,
};

export const shoppingCartUi = createSlice({
  name: 'shoppingCartUi',
  initialState,
  reducers: {
    toggleFlyCart: (state, action: PayloadAction<boolean>) => {
      state.isFly = action.payload;
    },
    toggleOpenCart: (state, action: PayloadAction<boolean>) => {
      state.isOpenCart = action.payload;
    },
  },
});

export const { toggleFlyCart, toggleOpenCart } = shoppingCartUi.actions;
export const isOpen = (state: RootState) => state.shoppingCartUi.isOpenCart;
export const isFly = (state: RootState) => state.shoppingCartUi.isFly;
export default shoppingCartUi.reducer;
