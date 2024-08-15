import { skipToken } from '@reduxjs/toolkit/query/react';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import Menu from './Menu/Menu';
import UserButton from './UserButton/UserButton';
import account from '@/assets/icons/Account.svg';
import cart from '@/assets/icons/cart.svg';
import logo from '@/assets/icons/Logo.svg';
import { RadioGroup } from '@/components/RadioGroup/RadioGroup';
import Search from '@/components/Search/Search';
import DropDown from '@/components/ui-components/Dropdown/DropDown';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useGetUserQuery } from '@/redux/services/user';
import { addFilterItem, clearFilters } from '@/redux/slices/queryParams';
import { toggleOpenCart, goods } from '@/redux/slices/shoppingCartSlice';
import { userId } from '@/redux/slices/userSlice';

const Header = () => {
  const id = useAppSelector(userId);

  const { data: user } = useGetUserQuery(id ?? skipToken);
  const dispatch = useAppDispatch();

  const openCart = () => dispatch(toggleOpenCart(true));

  const cartItems = useAppSelector(goods);

  const cartItemsCount = React.useMemo(
    () => cartItems.reduce((acc, item) => (acc += item.quantity), 0),
    [cartItems]
  );

  const onClickCatalog = () => {
    dispatch(clearFilters());
  };
  const onClickBestsellers = () => {
    dispatch(
      addFilterItem({ filterName: 'categories', value: 'Саморозвиток' })
    );
  };
  return (
    <header className={styles.header}>
      <div className={styles['header_top']}>
        <Link to={'/'}>
          <img src={logo} alt="logo" width={102} height={84} />
        </Link>
        <Search />
        <div className={styles.btns}>
          <RadioGroup />
          <div className={styles.icons}>
            {user ? (
              <UserButton {...user} />
            ) : (
              <DropDown
                options={<Menu />}
                control={<img src={account} alt="" width={24} height={24} />}
              />
            )}
            <button className={styles['cart-btn']}>
              <img
                src={cart}
                alt="cart"
                width={24}
                height={24}
                onClick={openCart}
              />
              {cartItemsCount > 0 && (
                <div className={styles['cart-counter']}>
                  <span>{cartItemsCount}</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link
              to={'/catalog?categories=self-development'}
              onClick={onClickBestsellers}
            >
              Хіти продажів
            </Link>
          </li>
          <li>
            <Link to={'/catalog'} onClick={onClickCatalog}>
              Каталог
            </Link>
          </li>
          <li>
            <Link to={'/order'}>Вигідні пропозиції</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
