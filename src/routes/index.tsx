import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Layout from '@/Layout/Layout/Layout';
import { Catalog, ErrorPage, Home, Page404 } from '@/Pages';
import { ROUTE_PATH } from '@/utils/constants';

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorPage />}>
      <Route path={ROUTE_PATH.HOME} element={<Home />} />
      <Route path={ROUTE_PATH.CATALOG} element={<Catalog />} />
      <Route path={ROUTE_PATH.PAGE404} element={<Page404 />} />
    </Route>
  )
);
export default route;
