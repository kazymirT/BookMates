import { baseApi } from './baseApi';
import store from '../store';
import { AddBook, CartResponse } from '@/redux/services/services.types';

export const cartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCart: build.query<CartResponse, void>({
      query: () => {
        const state = store.getState();
        const userId = state.user.user?.id;
        return `open/cart/${userId}`;
      },
      providesTags: ['Cart'],
    }),
    addBook: build.mutation<CartResponse, AddBook>({
      query: (body) => ({
        url: 'open/cart/add-book',
        method: 'POST',
        body,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(cartApi.util.upsertQueryData('getCart', undefined, data));
        } catch (error) {
          //console.log(error)
        }
      },
    }),
    removeBook: build.mutation<CartResponse, AddBook>({
      query: (body) => ({
        url: 'open/cart/remove-book',
        method: 'DELETE',
        body,
      }),
      //invalidatesTags: ['Cart'],
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(cartApi.util.upsertQueryData('getCart', undefined, data));
        } catch (error) {
          //console.log(error)
        }
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetCartQuery, useAddBookMutation, useRemoveBookMutation } =
  cartApi;
