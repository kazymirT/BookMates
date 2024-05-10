import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import store from './redux/store';
import route from './route';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={route} />
      </Provider>
    </>
  );
};

export default App;
