import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import HistoryWrapper from './HistoryWrapper';
import ProtectedRoute from './ProtectedRoute';
import Layout from '@/Layout/Layout/Layout';
import {
  Catalog,
  ErrorPage,
  Home,
  Page404,
  NotAuthenticated,
  NotAuthorized,
} from '@/Pages';
import { ROUTE_PATH } from '@/utils/constants';

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <HistoryWrapper>
          <Layout />
        </HistoryWrapper>
      }
      errorElement={<ErrorPage />}
    >
      <Route path={ROUTE_PATH.HOME} element={<Home />} />
      <Route
        path={ROUTE_PATH.CATALOG}
        element={
          <ProtectedRoute>
            <Catalog />
          </ProtectedRoute>
        }
      />
      <Route path={ROUTE_PATH.PAGE404} element={<Page404 />} />
      <Route
        path={ROUTE_PATH.NOTAUTHENTICATED}
        element={<NotAuthenticated />}
      />
      <Route path={ROUTE_PATH.NOTAUTHORIZED} element={<NotAuthorized />} />
    </Route>
  )
);

export default route;
