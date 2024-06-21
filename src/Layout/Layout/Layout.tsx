import { SkeletonTheme } from 'react-loading-skeleton';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CartNotification from '@/components/CartNotification/CartNotification';
import Modal from '@/components/Modal/Modal';
import Profile from '@/components/Profile/Profile';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import StatusScreen from '@/components/StatusScreen/StatusScreen';

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
          <Outlet />
        </SkeletonTheme>
      </main>
      <Footer />
      <Modal />
      <Profile />
      <StatusScreen />
      <CartNotification />
      <ScrollToTop />
    </>
  );
};

export default Layout;
