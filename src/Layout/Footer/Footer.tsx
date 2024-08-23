import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import appstore from '@/assets/icons/AppStore.svg';
import googleplay from '@/assets/icons/GooglePlay.svg';
import { toggleModal } from '@/redux/slices/modalSlice';

const Footer = () => {
  const dispatch = useDispatch();
  const handleOnSupport = () =>
    dispatch(toggleModal({ openedModalType: 'feedback' }));
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav>
          <ul className={styles.links}>
            <Link to={'/'}>
              <li>Головна сторінка</li>
            </Link>
            <Link to={'/'}>
              <li>Доставка та оплата</li>
            </Link>
            <li onClick={handleOnSupport}>Зворотній зв’язок</li>
          </ul>
          <div className={styles.btns}>
            <img src={appstore} alt="app store" width={160} height={48} />
            <img src={googleplay} alt="google play" width={160} height={48} />
          </div>
        </nav>
        <div>
          <span>&copy;</span>
          <span>Bookmate 2024. Усі права захищено</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
