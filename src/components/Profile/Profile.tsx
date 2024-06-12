import styles from './Profile.module.scss';
import Portal from '../Portal/Portal';
import cart from '@/assets/icons/cart.svg';
import close from '@/assets/icons/Close.svg';
import gear from '@/assets/icons/Gear.svg';
import profile from '@/assets/icons/Profile.svg';
import quit from '@/assets/icons/Quit.svg';
import support from '@/assets/icons/Support.svg';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { isOpen, toggleOpenProfile } from '@/redux/slices/profileSlice';
import { userData } from '@/redux/slices/userSlice';

const profileOptions = [
  {
    src: cart,
    title: 'Мої замовлення',
  },
  {
    src: gear,
    title: 'Налаштування',
  },
  {
    src: support,
    title: 'Підтримка',
  },
  {
    src: quit,
    title: 'Вийти',
  },
];

const Profile = () => {
  const isProfileOpen = useAppSelector(isOpen);
  const { user } = useAppSelector(userData);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(toggleOpenProfile(false));
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
                  <img src={close} alt="close" width={24} height={24} />
                </button>
              </div>
              <div className={styles.user}>
                <img src={profile} alt="" width={40} height={40} />
                <div className={styles['user-info']}>
                  <p>{`${user.firstName} ${user.lastName}`}</p>
                  <p>{user.email}</p>
                </div>
              </div>
            </div>
            <nav className={styles.nav}>
              <ul>
                {profileOptions.map((option) => (
                  <li key={option.title}>
                    <img src={option.src} alt="" width={24} height={24} />
                    <span>{option.title}</span>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </Portal>
      )}
    </>
  );
};

export default Profile;
