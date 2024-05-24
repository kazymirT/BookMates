import styles from './UserButton.module.scss';
import { useAppDispatch } from '@/redux/hooks';
import { toggleOpenProfile } from '@/redux/slices/profileSlice';

type Props = {
  firstName: string;
  lastName: string;
};

const UserButton = ({ firstName, lastName }: Props) => {
  const initials = `${firstName[0]}${lastName[0]}`;

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
