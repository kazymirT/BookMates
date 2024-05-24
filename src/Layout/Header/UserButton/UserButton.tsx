import styles from './UserButton.module.scss';
import { useAppDispatch } from '@/redux/hooks';
import { toggleOpenProfile } from '@/redux/slices/profileSlice';
import { type User } from '@/redux/slices/userSlice';

const UserButton = (props: User) => {
  const initials = `${props.firstName[0]}${props.lastName[0]}`;

  const dispatch = useAppDispatch();

  const hanleOpenProfile = () => {
    dispatch(toggleOpenProfile(true));
  };

  return (
    <button className={styles.button} onClick={hanleOpenProfile}>
      {initials}
    </button>
  );
};

export default UserButton;
