import { combineReducers } from '@reduxjs/toolkit';

import { baseApi } from './services/baseApi';
import { novaApi } from './services/novaApi';
import { adminSlice } from './slices/adminSlice';
import cartNotificationSlice from './slices/cartNotificationSlice';
import locationHistorySlice from './slices/locationHistorySlice';
import modalSlice from './slices/modalSlice';
import { overlaySlice } from './slices/overlay';
import profileSlice from './slices/profileSlice';
import { queryParamsSlice } from './slices/queryParams';
import shoppingCartSlice from './slices/shoppingCartSlice';
import shoppingCartUiSlice from './slices/shoppingCartUiSlice';
import skeletonSlice from './slices/skeletonSlice';
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
  overlay: overlaySlice.reducer,
  cartNotification: cartNotificationSlice,
  shoppingCart: shoppingCartSlice,
  shoppingCartUi: shoppingCartUiSlice,
  skeleton: skeletonSlice,
});
