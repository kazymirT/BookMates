import styles from './Profile.module.scss';
import Portal from '../Portal/Portal';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { isOpen, toggleOpenProfile } from '@/redux/slices/profileSlice';

const profileOptions = [
  {
    src: '/src/assets/icons/Cart.svg',
    title: 'Мої замовлення',
  },
  {
    src: '/src/assets/icons/Gear.svg',
    title: 'Налаштування',
  },
  {
    src: '/src/assets/icons/Support.svg',
    title: 'Підтримка',
  },
  {
    src: '/src/assets/icons/Quit.svg',
    title: 'Вийти',
  },
];

const Profile = () => {
  const isProfileOpen = useAppSelector(isOpen);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(toggleOpenProfile(false));
  };

  return (
    <>
      <Portal
        isOpen={isProfileOpen}
        placeContent="right"
        onClickOutside={handleClose}
      >
        <aside className={styles.profile}>
          <div className={styles.head}>
            <div className={styles['head-info']}>
              <h2>Профіль</h2>
              <button onClick={handleClose}>
                <img
                  src="/src/assets/icons/Close.svg"
                  alt="close"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <div className={styles.user}>
              <img
                src="/src/assets/icons/Profile.svg"
                alt=""
                width={40}
                height={40}
              />
              <div className={styles['user-info']}>
                <p>Петро Шевченко</p>
                <p>example@gmail.com</p>
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
    </>
  );
};

export default Profile;
