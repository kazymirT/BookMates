import { baseNewApi } from './baseNewApi';
import { ErrorResponse } from './services.types';
import { toggleModal } from '../slices/modalSlice';
import { toggleStatus } from '../slices/statusSlice';

export interface Subscribe {
  email: string;
}

export interface Unsubscribe {
  token: string;
  reason: string;
}

export interface Mailing {
  subject: string;
  text: string;
}

export const subscriberApi = baseNewApi.injectEndpoints({
  endpoints: (builder) => ({
    subscribe: builder.mutation<string, Subscribe>({
      query: (body) => ({
        url: `newsletter-subscriber`,
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(toggleStatus('loading'));
        try {
          await queryFulfilled;
          dispatch(toggleModal({ openedModalType: 'subscription-success' }));
        } catch (error) {
          const {
            error: { status },
          } = error as ErrorResponse;
          if (status === 409) {
            dispatch(toggleModal({ openedModalType: 'subscription-error' }));
          }
        } finally {
          dispatch(toggleStatus('idle'));
        }
      },
    }),
    unsubscribe: builder.mutation<string, Unsubscribe>({
      query: (body) => ({
        url: `newsletter-subscriber/unsubscribe`,
        method: 'POST',
        body,
      }),
    }),
    mailing: builder.mutation<string, Mailing>({
      query: (body) => ({
        url: `/newsletter-subscriber/mailing`,
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useSubscribeMutation,
  useUnsubscribeMutation,
  useMailingMutation,
} = subscriberApi;
