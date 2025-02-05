import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

type BurgerMenuState = {
  isOpen: boolean;
};

const initialState: BurgerMenuState = {
  isOpen: false,
};

export const burgerMenu = createSlice({
  name: 'burgerMenu',
  initialState,
  reducers: {
    toggleShowBurgerMenu: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleShowBurgerMenu } = burgerMenu.actions;
export const isOpenBurgerMenu = (state: RootState) => state.burgerMenu.isOpen;
export default burgerMenu.reducer;
