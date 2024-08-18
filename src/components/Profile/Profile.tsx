import styles from './Profile.module.scss';
import Portal from '../Portal/Portal';
import { Icon } from '../ui-components/Icons';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';
import { isOpen, toggleOpenProfile } from '@/redux/slices/profileSlice';
import { logout, userData } from '@/redux/slices/userSlice';

const Profile = () => {
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
                <h2>Профіль користувача</h2>
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
                  <Icon.Cart />
                  <span>Мої замовлення</span>
                </li>
                <li>
                  <Icon.Settings />
                  <span>Налаштування</span>
                </li>
                <li onClick={onClickSupport}>
                  <Icon.Support />
                  <span>Підтримка</span>
                </li>
                <li onClick={onLogout}>
                  <Icon.Logout />
                  <span>Вийти</span>
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
