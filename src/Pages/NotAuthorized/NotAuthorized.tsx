import { Link } from 'react-router-dom';

import styles from './NotAuthorized.module.scss';
import { useAppSelector } from '@/redux/hooks';
import { history } from '@/redux/slices/locationHistorySlice';

const NotAuthorized = () => {
  const { beforePrev } = useAppSelector(history);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Oops &#58; &#40;</h1>
        <h2>You&apos;re not authorized to access this page.</h2>
        <div className={styles.control}>
          <Link to={beforePrev || '/'}>return</Link>
        </div>
      </div>
    </div>
  );
};

export default NotAuthorized;
