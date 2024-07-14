import { skipToken } from '@reduxjs/toolkit/query/react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import Menu from './Menu/Menu';
import UserButton from './UserButton/UserButton';
import account from '@/assets/icons/Account.svg';
import cart from '@/assets/icons/cart.svg';
import logo from '@/assets/icons/Logo.svg';
import DropDown from '@/components/ui-components/Dropdown/DropDown';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useGetUserQuery } from '@/redux/services/user';
import { toggleShowCartNotification } from '@/redux/slices/cartNotificationSlice';
import { userId } from '@/redux/slices/userSlice';

const Header = () => {
  const id = useAppSelector(userId);

  const { data: user } = useGetUserQuery(id ?? skipToken);
  const dispatch = useAppDispatch();

  const showNotification = () => {
    dispatch(toggleShowCartNotification(true));
  };

  return (
    <header className={styles.header}>
      <Link to={'/'}>
        <img src={logo} alt="logo" width={102} height={84} />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to={'/catalog/bestseller'}>Хіти продажів</Link>
          </li>
          <li>
            <Link to={'/catalog'}>Каталог</Link>
          </li>
          <li>
            <Link to={'/order'}>Вигідні пропозиції</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.btns}>
        {user ? (
          <UserButton {...user} />
        ) : (
          <DropDown
            options={<Menu />}
            control={<img src={account} alt="" width={24} height={24} />}
          />
        )}
        <img
          src={cart}
          alt="cart"
          width={24}
          height={24}
          onClick={showNotification}
        />
      </div>
    </header>
  );
};

export default Header;
