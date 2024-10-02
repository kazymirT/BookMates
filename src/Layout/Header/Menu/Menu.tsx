import { useTranslation } from 'react-i18next';

import styles from './Menu.module.scss';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';

const Menu = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const handleLogin = () => dispatch(toggleModal({ openedModalType: 'login' }));

  const handleRegister = () =>
    dispatch(toggleModal({ openedModalType: 'create-account' }));

  const handleFeedback = () =>
    dispatch(toggleModal({ openedModalType: 'feedback' }));

  return (
    <ul className={styles.list}>
      <li onClick={handleLogin}>{t('header.menu.login')}</li>
      <li onClick={handleRegister}>{t('header.menu.register')}</li>
      <li onClick={handleFeedback}>{t('header.menu.support')}</li>
    </ul>
  );
};

export default Menu;
