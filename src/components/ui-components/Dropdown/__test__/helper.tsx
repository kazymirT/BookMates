import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import DropDown from '../DropDown';
import Overlay from '@/components/Overlay/Overlay';
import { rootReducer } from '@/redux/rootReducers';

export const CONTROL_ID = 'control-id';

export const createMockStore = (initialState = {}) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

export const setup = (isOverflow: boolean = false) => {
  const mockStore = createMockStore();
  return render(
    <Provider store={mockStore}>
      <Overlay />
      <DropDown
        control={(toggleOpen: () => void) => (
          <button onClick={toggleOpen} data-testid={CONTROL_ID}>
            Toggle Dropdown
          </button>
        )}
        options={(toggleOpen: () => void) => (
          <ul>
            <li onClick={() => toggleOpen()}>Option 1</li>
            <li onClick={() => toggleOpen()}>Option 2</li>
          </ul>
        )}
        variant="menu"
        isOverflow={isOverflow}
      />
    </Provider>
  );
};
