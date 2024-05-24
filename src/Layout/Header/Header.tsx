import { skipToken } from '@reduxjs/toolkit/query/react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import Menu from './Menu/Menu';
import UserButton from './UserButton/UserButton';
import DropDown from '@/components/ui-components/Dropdown/DropDown';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useGetUserQuery } from '@/redux/services/user';
import { toggleOpenProfile } from '@/redux/slices/profileSlice';
import { userId } from '@/redux/slices/userSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const id = useAppSelector(userId);

  const { data: user } = useGetUserQuery(id ?? skipToken);

  const toggleProfile = () => {
    dispatch(toggleOpenProfile(true));
  };

  return (
    <header className={styles.header}>
      <Link to={'/'}>
        <img
          src="/src/assets/icons/Logo.svg"
          alt="logo"
          width={102}
          height={84}
        />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to={'#'}>Хіти продажів</Link>
          </li>
          <li>
            <Link to={'#'}>Каталог</Link>
          </li>
          <li>
            <Link to={'#'}>Вигідні пропозиції</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.btns}>
        {user ? (
          <UserButton {...user} />
        ) : (
          <DropDown
            options={<Menu />}
            control={
              <img
                src="/src/assets/icons/Account.svg"
                alt=""
                width={24}
                height={24}
              />
            }
          />
        )}
        <img
          src="/src/assets/icons/Cart.svg"
          alt="cart"
          width={24}
          height={24}
          onClick={toggleProfile}
        />
      </div>
    </header>
  );
};

export default Header;
