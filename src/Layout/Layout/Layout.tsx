import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Modal from '@/components/Modal/Modal';
import Profile from '@/components/Profile/Profile';
import StatusScreen from '@/components/StatusScreen/StatusScreen';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <Modal />
      <Profile />
      <StatusScreen />
    </>
  );
};

export default Layout;
