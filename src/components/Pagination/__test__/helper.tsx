import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { vi } from 'vitest';

import Pagination from '../Pagination';
import { PaginationProps } from '../types';
import { rootReducer } from '@/redux/rootReducers';

const mockDispatch = vi.fn();
vi.mock('@/redux/hooks', () => ({
  useAppDispatch: () => mockDispatch,
}));

export const createMockStore = (initialState = {}) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

export const setup = (props?: Partial<PaginationProps>) => {
  const mockStore = createMockStore();
  const defaultProps: PaginationProps = {
    currentPage: 1,
    totalPages: 5,
    ...props,
  };
  const utils = render(
    <Provider store={mockStore}>
      <Pagination {...defaultProps} />
    </Provider>
  );
  return { ...utils, mockDispatch };
};
