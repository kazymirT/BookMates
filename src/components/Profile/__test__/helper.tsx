// import { configureStore } from '@reduxjs/toolkit';
// import { render } from '@testing-library/react';
// import { I18nextProvider } from 'react-i18next';
// import { Provider } from 'react-redux';
// import { MemoryRouter } from 'react-router-dom';
// import { vi } from 'vitest';

// import Profile from '../Profile';
// import i18n from '@/i18n';
// import { rootReducer } from '@/redux/rootReducers';

// const mockDispatch = vi.fn();
// const mockSelector = vi.fn();
// const mockIsOpen = vi.fn();
// const mockUserData = vi.fn();

// vi.mock('@/redux/hooks', () => ({
//   useAppDispatch: () => mockDispatch,
//   useAppSelector: (selector: Function) => {
//     if (selector === isOpen) return mockIsOpen();
//     if (selector === userData) return mockUserData();
//     return undefined;
//   },
// }));

// export const createMockStore = (initialState = {}) =>
//   configureStore({
//     reducer: rootReducer,
//     preloadedState: initialState,
//   });

// export const setup = () => {
//   const mockStore = createMockStore();
//   const utils = render(
//     <Provider store={mockStore}>
//       <MemoryRouter>
//         <I18nextProvider i18n={i18n}>
//           <Profile />
//         </I18nextProvider>
//       </MemoryRouter>
//     </Provider>
//   );
//   return { ...utils, mockDispatch, mockSelector };
// };
