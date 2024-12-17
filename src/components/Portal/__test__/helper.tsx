import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Portal, { PortalProps } from '@/components/Portal/Portal';
import i18n from '@/i18n';
import { rootReducer } from '@/redux/rootReducers';

export const createMockStore = (initialState = {}) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

export const setupPortal = (props?: Partial<PortalProps>) => {
  const mockStore = createMockStore();
  const children = <div data-testid={'content test id'}>Portal Content</div>;
  const defaultProps: PortalProps = {
    onClickOutside: props?.onClickOutside,
    isOpen: props?.isOpen ?? true,
    placeContent: props?.placeContent ?? 'center',
    ...props,
  };
  const utils = render(
    <Provider store={mockStore}>
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Portal {...defaultProps}>{children}</Portal>
        </I18nextProvider>
      </MemoryRouter>
    </Provider>
  );

  return { ...utils };
};
