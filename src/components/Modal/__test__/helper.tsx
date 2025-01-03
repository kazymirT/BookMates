import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

import Modal from '../Modal';
import i18n from '@/i18n';
import { rootReducer } from '@/redux/rootReducers';
import { ModalState } from '@/redux/slices/modalSlice';

const mockDispatch = vi.fn();
const mockSelector = vi.fn<() => ModalState>();
vi.mock('@/redux/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: () => mockSelector,
}));

export const createMockStore = (initialState = {}) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

export const setup = () => {
  const mockStore = createMockStore();
  const utils = render(
    <Provider store={mockStore}>
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Modal />
        </I18nextProvider>
      </MemoryRouter>
    </Provider>
  );
  return { ...utils, mockDispatch, mockSelector };
};
