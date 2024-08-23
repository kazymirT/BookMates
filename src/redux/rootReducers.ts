import { combineReducers } from '@reduxjs/toolkit';

import { baseApi } from './services/baseApi';
import { novaApi } from './services/novaApi';
import { adminSlice } from './slices/adminSlice';
import cartNotificationSlice from './slices/cartNotificationSlice';
import locationHistorySlice from './slices/locationHistorySlice';
import modalSlice from './slices/modalSlice';
import profileSlice from './slices/profileSlice';
import { queryParamsSlice } from './slices/queryParams';
import shoppingCartSlice from './slices/shoppingCartSlice';
import statusSlice from './slices/statusSlice';
import userSlice from './slices/userSlice';

export const rootReducer = combineReducers({
  [novaApi.reducerPath]: novaApi.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
  queryParams: queryParamsSlice.reducer,
  admin: adminSlice.reducer,
  modal: modalSlice,
  user: userSlice,
  locationHistory: locationHistorySlice,
  profile: profileSlice,
  status: statusSlice,
  cartNotification: cartNotificationSlice,
  shoppingCart: shoppingCartSlice,
});
