import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import appstore from '@/assets/icons/AppStore.svg';
import googleplay from '@/assets/icons/GooglePlay.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.links}>
          <Link to={'/'}>
            <li>Головна сторінка</li>
          </Link>
          <Link to={'/'}>
            <li>Доставка та оплата</li>
          </Link>
          <Link to={'/'}>
            <li>Зворотній зв’язок</li>
          </Link>
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
    </footer>
  );
};

export default Footer;
