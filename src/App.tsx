import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import Modal from './components/Modal/Modal';
import store from './redux/store';
import route from './route';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={route} />
        <Modal />
      </Provider>
    </>
  );
};

export default App;
