import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.links}>
          <Link to={'/'}>
            <li>Головна</li>
          </Link>
          <Link to={'/'}>
            <li>FAQ</li>
          </Link>
          <Link to={'/'}>
            <li>Підтримка</li>
          </Link>
        </ul>
        <div className={styles.btns}>
          <img
            src="/src/assets/icons/AppStore.svg"
            alt="app store"
            width={160}
            height={48}
          />
          <img
            src="/src/assets/icons/GooglePlay.svg"
            alt="google play"
            width={160}
            height={48}
          />
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
