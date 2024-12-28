import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

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
  const asideRef = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(true);

  const handleCloseProfile = () => dispatch(toggleOpenProfile(false));

  const closeProfile = () => setShow(false);

  const onLogout = () => {
    dispatch(logout());
    closeProfile();
  };

  const onClickSupport = () => {
    closeProfile();
    dispatch(toggleModal({ openedModalType: 'feedback' }));
  };

  return (
    <>
      {user && (
        <Portal
          isOpen={isProfileOpen}
          placeContent="right"
          onClickOutside={closeProfile}
        >
          <CSSTransition
            in={show}
            nodeRef={asideRef}
            timeout={300}
            classNames={{
              appear: styles['appear'],
              appearActive: styles['appear-active'],
              exit: styles['exit'],
              exitActive: styles['exit-active'],
              exitDone: styles['exit-done'],
            }}
            appear
            onExiting={handleCloseProfile}
            onExited={() => setShow(true)}
          >
            <aside className={styles.profile} ref={asideRef}>
              <div className={styles.head}>
                <div className={styles['head-info']}>
                  <h2>{t('profile.title')}</h2>
                  <button onClick={closeProfile}>
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
                      onClick={closeProfile}
                    >
                      <Icon.Cart />
                      <span>{t('profile.links.order')}</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={'/user/settings'}
                      className={styles.link}
                      onClick={closeProfile}
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
          </CSSTransition>
        </Portal>
      )}
    </>
  );
};

export default Profile;
