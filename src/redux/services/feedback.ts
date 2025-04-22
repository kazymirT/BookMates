import { baseNewApi } from './baseNewApi';
import { toggleModal } from '../slices/modalSlice';
import { toggleStatus } from '../slices/statusSlice';

export interface Feedback {
  email: string;
  topic: string;
  text: string;
}

export interface FeedbackArgs {
  page?: number | string;
  limit?: number | string;
}

export interface Feedbacks {
  id: number;
  userEmail: string;
  topic: string;
  text: string;
}

export interface FeedbacksResponse {
  feedbacks: Feedbacks[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const feedbackApi = baseNewApi.injectEndpoints({
  endpoints: (builder) => ({
    getFeedbacks: builder.query<FeedbacksResponse, FeedbackArgs>({
      query: ({ page = 1, limit = 16 }) => ({
        url: `feedback?limit=${limit}&page=${page}`,
      }),
    }),
    sendFeedback: builder.mutation<string, Feedback>({
      query: (body) => ({
        url: `feedback`,
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(toggleStatus('loading'));
        try {
          await queryFulfilled;
          dispatch(toggleModal({ openedModalType: 'feedback-success' }));
        } catch (error) {
          console.log(error);
        } finally {
          dispatch(toggleStatus('idle'));
        }
      },
    }),
    deleteAll: builder.mutation<string, void>({
      query: () => ({
        url: `feedback/all`,
        method: 'DELETE',
      }),
    }),
    deleteByIds: builder.mutation<string, string[]>({
      query: (ids) => ({
        url: `feedback/some?ids=${ids.join(',')}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSendFeedbackMutation } = feedbackApi;
