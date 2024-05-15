import { Link } from 'react-router-dom';

import styles from './NotAuthenticated.module.scss';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { history } from '@/redux/slices/locationHistorySlice';
import { toggleModal } from '@/redux/slices/modalSlice';

const NotAuthenticated = () => {
  const { prev, beforePrev } = useAppSelector(history);
  const dispatch = useAppDispatch();
  const openModal = () => {
    dispatch(toggleModal({ openedModalType: 'login', redirect: prev }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Oops &#58; &#40;</h1>
        <h2>You&apos;re not authenticated to access this page.</h2>
        <div className={styles.control}>
          <Link to={beforePrev || '/'}>return</Link>
          <span>or</span>
          <button onClick={openModal}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default NotAuthenticated;
