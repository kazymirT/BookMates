import { lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// import ProtectedRoute from './ProtectedRoute';

const Home = lazy(() => import('../Pages/Home/Home'));
const Catalog = lazy(() => import('../Pages/Catalog/Catalog'));
const Page404 = lazy(() => import('../Pages/Page404/Page404'));
const Order = lazy(() => import('../Pages/Order/Order'));
const Delivery = lazy(() => import('../Pages/Delivery/Delivery'));
const Product = lazy(() => import('../Pages/Product/Product'));
const Admin = lazy(() => import('../Pages/Admin/Admin'));
const ErrorPage = lazy(() => import('../Pages/ErrorPage/ErrorPage'));
const NotAuthenticated = lazy(
  () => import('../Pages/NotAuthenticated/NotAuthenticated')
);
const NotAuthorized = lazy(
  () => import('../Pages/NotAuthorized/NotAuthorized')
);
const Author = lazy(() => import('../Pages/Author/Author'));
const User = lazy(() => import('../Pages/User/User'));
const Authors = lazy(() => import('../Pages/Authors/Authors'));
const Collections = lazy(() => import('../Pages/Collections/Collections'));

import HistoryWrapper from './HistoryWrapper';
import PrivateRoutes from './PrivateRoutes';
import Layout from '@/Layout/Layout/Layout';
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
      <Route path={'/catalog/:categoryId?'} element={<Catalog />} />
      <Route path={'/product/:productId?'} element={<Product />} />
      <Route path={'/author/:authorId'} element={<Author />} />
      <Route path={'/authors/'} element={<Authors />} />
      <Route path={'/order'} element={<Order />} />
      <Route element={<PrivateRoutes />}>
        <Route path={'/user/:userId?'} element={<User />} />
      </Route>
      <Route path={'/delivery'} element={<Delivery />} />
      <Route path={'/collections'} element={<Collections />} />
      <Route path={ROUTE_PATH.PAGE404} element={<Page404 />} />
      <Route
        path={ROUTE_PATH.NOTAUTHENTICATED}
        element={<NotAuthenticated />}
      />
      <Route path={ROUTE_PATH.NOTAUTHORIZED} element={<NotAuthorized />} />
      <Route path={'/admin/:adminId?'} element={<Admin />} />
    </Route>
  )
);

export default route;
