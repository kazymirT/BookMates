import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import appstore from '@/assets/icons/AppStore.svg';
import googleplay from '@/assets/icons/GooglePlay.svg';
import { toggleModal } from '@/redux/slices/modalSlice';

const Footer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleOnSupport = () =>
    dispatch(toggleModal({ openedModalType: 'feedback' }));
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav>
          <ul className={styles.links}>
            <li>
              <Link to={'/'}>{t('footer.links.main')}</Link>
            </li>
            <li>
              <Link to={'/'}>{t('footer.links.delivery')}</Link>
            </li>
            <li onClick={handleOnSupport}>{t('footer.links.support')}</li>
          </ul>
          <div className={styles.btns}>
            <img
              src={appstore}
              alt="app store"
              width={160}
              height={48}
              loading="lazy"
            />
            <img
              src={googleplay}
              alt="google play"
              width={160}
              height={48}
              loading="lazy"
            />
          </div>
        </nav>
        <div>
          <span>&copy;</span>
          <span>{t('footer.copyright')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
