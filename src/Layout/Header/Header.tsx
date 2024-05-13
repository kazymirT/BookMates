import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';
import { PAGES, ROUTE_PATH } from '../../utils/constants';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';

const Header = () => {
  const dispatch = useAppDispatch();

  const handleLogin = () => dispatch(toggleModal({ openedModalType: 'login' }));

  const handleRegister = () =>
    dispatch(toggleModal({ openedModalType: 'create-account' }));

  const handleFeedback = () =>
    dispatch(toggleModal({ openedModalType: 'feedback' }));

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {PAGES.map((page, index) => (
            <li key={index}>
              <NavLink to={ROUTE_PATH[page]}>{page}</NavLink>
            </li>
          ))}
          <li>
            <button onClick={handleLogin}>login</button>
          </li>
          <li>
            <button onClick={handleRegister}>register</button>
          </li>
          <li>
            <button onClick={handleFeedback}>feedback</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
