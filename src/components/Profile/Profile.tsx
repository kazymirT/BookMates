import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import styles from './Profile.module.scss';
import Portal from '../Portal/Portal';
import { Icon } from '../ui-components/Icons';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';
import { isOpen, toggleOpenProfile } from '@/redux/slices/profileSlice';
import { logout, userData } from '@/redux/slices/userSlice';

const Profile = () => {
  const { t } = useTranslation();
  const isProfileOpen = useAppSelector(isOpen);
  const { user } = useAppSelector(userData);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(toggleOpenProfile(false));
  };
  const onLogout = () => {
    dispatch(logout());
    handleClose();
  };
  const onClickSupport = () => {
    handleClose();
    dispatch(toggleModal({ openedModalType: 'feedback' }));
  };
  return (
    <>
      {user && (
        <Portal
          isOpen={isProfileOpen}
          placeContent="right"
          onClickOutside={handleClose}
        >
          <aside className={styles.profile}>
            <div className={styles.head}>
              <div className={styles['head-info']}>
                <h2>{t('profile.title')}</h2>
                <button onClick={handleClose}>
                  <Icon.Close />
                </button>
              </div>
              <div className={styles.user}>
                <div className={styles.icon}>
                  <Icon.Profile />
                </div>
                <div className={styles['user-info']}>
                  <p>{`${user.firstName} ${user.lastName}`}</p>
                  <p>{user.email}</p>
                </div>
              </div>
            </div>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <NavLink
                    to={'/user/orders'}
                    className={styles.link}
                    onClick={handleClose}
                  >
                    <Icon.Cart />
                    <span>{t('profile.links.order')}</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'/user/settings'}
                    className={styles.link}
                    onClick={handleClose}
                  >
                    <Icon.Settings />
                    <span>{t('profile.links.settings')}</span>
                  </NavLink>
                </li>
                <li onClick={onClickSupport} className={styles.link}>
                  <Icon.Support />
                  <span>{t('profile.links.support')}</span>
                </li>
                <li onClick={onLogout} className={styles.link}>
                  <Icon.Logout />
                  <span>{t('profile.links.logout')}</span>
                </li>
              </ul>
            </nav>
          </aside>
        </Portal>
      )}
    </>
  );
};

export default Profile;
