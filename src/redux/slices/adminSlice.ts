import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

type Category = { name: string; id: number } | null;
type AttributesName = 'category' | 'language' | 'authors';
type Attributes = {
  item: Category;
  name: AttributesName;
};
type AdminState = {
  bookId: number | null;
  attributes: Attributes | null;
  attributesName: AttributesName | null;
  clientId: number | null;
  orderId: string | null;
  collectionId: number | null;
};

const initialState: AdminState = {
  bookId: null,
  attributes: null,
  attributesName: null,
  clientId: null,
  orderId: null,
  collectionId: null,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  selectors: {
    bookId: (state) => state.bookId,
    collectionId: (state) => state.collectionId,
    attributesName: (state) => state.attributesName,
    clientId: (state) => state.clientId,
    orderId: (state) => state.orderId,
    attributes: (state) => state.attributes,
  },
  reducers: {
    setBookId: (state, action: PayloadAction<number | null>) => {
      state.bookId = action.payload;
    },
    setCollectionId: (state, action: PayloadAction<number | null>) => {
      state.collectionId = action.payload;
    },
    setAttributesName: (
      state,
      action: PayloadAction<AttributesName | null>
    ) => {
      state.attributesName = action.payload;
    },
    setClientId: (state, action: PayloadAction<number | null>) => {
      state.clientId = action.payload;
    },
    setOrderId: (state, action: PayloadAction<string | null>) => {
      state.orderId = action.payload;
    },
    setAttributes: (state, action: PayloadAction<Attributes | null>) => {
      state.attributes = action.payload;
    },
  },
});

export const {
  setBookId,
  setAttributesName,
  setClientId,
  setOrderId,
  setAttributes,
  setCollectionId,
} = adminSlice.actions;
export const {
  bookId,
  collectionId,
  attributesName,
  clientId,
  orderId,
  attributes,
} = adminSlice.selectors;
export const userData = (state: RootState) => state.user;
export default adminSlice.reducer;
