import { Suspense, lazy } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import styles from './Layout.module.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

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
        <SkeletonTheme
          baseColor="#d1d1d1"
          highlightColor="#6a6a6a"
          borderRadius="0.5rem"
          duration={4}
        >
          <Suspense fallback={<div className={styles.loading}>loading</div>}>
            <OverlayLazy />
            <Outlet />
          </Suspense>
        </SkeletonTheme>
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
