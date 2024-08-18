import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { baseApi } from './services/baseApi';
import { novaApi } from './services/novaApi';
import cartNotificationSlice from './slices/cartNotificationSlice';
import locationHistorySlice from './slices/locationHistorySlice';
import modalSlice from './slices/modalSlice';
import profileSlice from './slices/profileSlice';
import { queryParamsSlice } from './slices/queryParams';
import shoppingCartSlice from './slices/shoppingCartSlice';
import statusSlice from './slices/statusSlice';
import userSlice from './slices/userSlice';

const rootReducer = combineReducers({
  [novaApi.reducerPath]: novaApi.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
  queryParams: queryParamsSlice.reducer,
  modal: modalSlice,
  user: userSlice,
  locationHistory: locationHistorySlice,
  profile: profileSlice,
  status: statusSlice,
  cartNotification: cartNotificationSlice,
  shoppingCart: shoppingCartSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'shoppingCart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(novaApi.middleware, baseApi.middleware),
});

export const persister = persistStore(store);
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
