import { skipToken } from '@reduxjs/toolkit/query/react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';
import { PAGES, ROUTE_PATH } from '../../utils/constants';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useGetUserQuery } from '@/redux/services/user';
import { toggleModal } from '@/redux/slices/modalSlice';
import { userId } from '@/redux/slices/userSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const id = useAppSelector(userId);

  const { data: user } = useGetUserQuery(id ?? skipToken);

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
      {user && <p>{user.firstName}</p>}
    </header>
  );
};

export default Header;
