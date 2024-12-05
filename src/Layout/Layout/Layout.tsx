import { Suspense, lazy } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import styles from './Layout.module.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Loader from '@/components/ui-components/Loader/Loader';

const OverlayLazy = lazy(() => import('../../components/Overlay/Overlay'));
const ShoppingCartLazy = lazy(
  () => import('../../components/ShoppingCart/ShoppingCart')
);
const CartNotificationLazy = lazy(
  () => import('../../components/CartNotification/CartNotification')
);
const StatusScreenLazy = lazy(
  () => import('../../components/StatusScreen/StatusScreen')
);
const ProfileLazy = lazy(() => import('../../components/Profile/Profile'));
const ModalLazy = lazy(() => import('../../components/Modal/Modal'));

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Suspense fallback={<Loader />}>
          <OverlayLazy />
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollRestoration />

      <Suspense>
        <StatusScreenLazy />
        <ProfileLazy />
        <ModalLazy />
        <CartNotificationLazy />
        <ShoppingCartLazy />
      </Suspense>
    </>
  );
};

export default Layout;
