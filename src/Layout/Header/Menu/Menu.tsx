import styles from './Menu.module.scss';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';

const Menu = () => {
  const dispatch = useAppDispatch();

  const handleLogin = () => dispatch(toggleModal({ openedModalType: 'login' }));

  const handleRegister = () =>
    dispatch(toggleModal({ openedModalType: 'create-account' }));

  const handleFeedback = () =>
    dispatch(toggleModal({ openedModalType: 'feedback' }));

  return (
    <ul className={styles.list}>
      <li onClick={handleLogin}>Логін</li>
      <li onClick={handleRegister}>Реєстрація</li>
      <li onClick={handleFeedback}>Підтримка</li>
    </ul>
  );
};

export default Menu;
