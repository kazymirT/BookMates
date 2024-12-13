import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

import Breadcrumbs from '../BreadCrumbs';
import { BreadCrumbsProps } from '../types';
import i18n from '@/i18n';
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

export const setup = (props?: Partial<BreadCrumbsProps>) => {
  const mockStore = createMockStore();
  const defaultProps: BreadCrumbsProps = {
    options: props?.options ?? [],
    activeLastLink: props?.activeLastLink,
    ...props,
  };

  const utils = render(
    <Provider store={mockStore}>
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Breadcrumbs {...defaultProps} />
        </I18nextProvider>
      </MemoryRouter>
    </Provider>
  );

  return { ...utils, mockDispatch };
};
