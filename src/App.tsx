import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persister } from './redux/store';
import route from './routes';
import '@i18n';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <RouterProvider router={route} />
      </PersistGate>
    </Provider>
  );
};

export default App;
