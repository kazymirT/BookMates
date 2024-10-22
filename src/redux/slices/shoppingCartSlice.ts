import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

export type CartItem = {
  id: number;
  img: string;
  title: string;
  authors: string[];
  price: number;
  discount: number;
  discountPrice: number;
  quantity: number;
};

type ShoppingCartState = {
  isFly: boolean;
  isOpenCart: boolean;
  goods: CartItem[];
};

const initialState: ShoppingCartState = {
  isFly: false,
  isOpenCart: false,
  goods: [],
};

export const shoppingCart = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    toggleFlyCart: (state, action: PayloadAction<boolean>) => {
      state.isFly = action.payload;
    },
    toggleOpenCart: (state, action: PayloadAction<boolean>) => {
      state.isOpenCart = action.payload;
    },
    addGoods: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existedItem = state.goods.find(
        (item) => item.id === action.payload.id
      );
      if (existedItem) {
        existedItem.quantity++;
      } else state.goods.push({ ...action.payload, quantity: 1 });
    },
    increaseQuantity: (state, action: PayloadAction<CartItem['id']>) => {
      const existedItem = state.goods.find(
        (item) => item.id === action.payload
      );
      if (existedItem) {
        existedItem.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<CartItem['id']>) => {
      const existedItem = state.goods.find(
        (item) => item.id === action.payload
      );
      if (existedItem && existedItem.quantity !== 1) {
        existedItem.quantity--;
      }
    },
    removePosition: (state, action: PayloadAction<CartItem['id']>) => {
      state.goods = state.goods.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.goods = [];
    },
  },
});

export const {
  toggleFlyCart,
  toggleOpenCart,
  addGoods,
  increaseQuantity,
  decreaseQuantity,
  removePosition,
  clearCart,
} = shoppingCart.actions;
export const isOpen = (state: RootState) => state.shoppingCart.isOpenCart;
export const goods = (state: RootState) => state.shoppingCart.goods;
export const isFly = (state: RootState) => state.shoppingCart.isFly;
export default shoppingCart.reducer;
