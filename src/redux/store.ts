import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { baseApi } from './services/baseApi';
import { novaApi } from './services/novaApi';
import locationHistorySlice from './slices/locationHistorySlice';
import modalSlice from './slices/modalSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    [novaApi.reducerPath]: novaApi.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
    modal: modalSlice,
    user: userSlice,
    locationHistory: locationHistorySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(novaApi.middleware, baseApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
