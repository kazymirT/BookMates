import { Suspense } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import styles from './Layout.module.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CartNotification from '@/components/CartNotification/CartNotification';
import Modal from '@/components/Modal/Modal';
import Overlay from '@/components/Overlay/Overlay';
import Profile from '@/components/Profile/Profile';
import ShoppingCart from '@/components/ShoppingCart/ShoppingCart';
import StatusScreen from '@/components/StatusScreen/StatusScreen';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Overlay />
        <SkeletonTheme
          baseColor="#d1d1d1"
          highlightColor="#6a6a6a"
          borderRadius="0.5rem"
          duration={4}
        >
          <Suspense fallback={<div>loading</div>}>
            <Outlet />
          </Suspense>
        </SkeletonTheme>
      </main>
      <Footer />
      <ToastContainer />
      <Modal />
      <Profile />
      <StatusScreen />
      <CartNotification />
      <ScrollRestoration />
      <ShoppingCart />
    </>
  );
};

export default Layout;
