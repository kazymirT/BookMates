import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { UnknownAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { novaApi } from './services/novaApi';
import locationHistorySlice from './slices/locationHistorySlice';
import modalSlice from './slices/modalSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    [novaApi.reducerPath]: novaApi.reducer,
    modal: modalSlice,
    user: userSlice,
    locationHistory: locationHistorySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(novaApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType> = ThunkAction<
  ReturnType,
  RootState,
  undefined,
  UnknownAction
>;

export default store;
