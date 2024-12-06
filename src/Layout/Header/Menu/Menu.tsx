import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Menu.module.scss';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';
export interface MenuProps {
  onClose: () => void;
}

const Menu: FC<MenuProps> = ({ onClose }) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(toggleModal({ openedModalType: 'login' }));
    onClose();
  };

  const handleRegister = () => {
    dispatch(toggleModal({ openedModalType: 'create-account' }));
    onClose();
  };
  const handleFeedback = () => {
    dispatch(toggleModal({ openedModalType: 'feedback' }));
    onClose();
  };

  return (
    <ul className={styles.list}>
      <li onClick={handleLogin}>{t('header.menu.login')}</li>
      <li onClick={handleRegister}>{t('header.menu.register')}</li>
      <li onClick={handleFeedback}>{t('header.menu.support')}</li>
    </ul>
  );
};

export default Menu;
