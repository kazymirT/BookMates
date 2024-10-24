import { skipToken } from '@reduxjs/toolkit/query/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import CategoryAll from './CategoryAll/CategoryAll';
import styles from '../Header.module.scss';
import Search from '@/components/Search/Search';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Position,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import DropDown from '@/components/ui-components/Dropdown/DropDown';
import { Icon } from '@/components/ui-components/Icons';
import Menu from '@/Layout/Header/Menu/Menu';
import UserButton from '@/Layout/Header/UserButton/UserButton';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useGetUserQuery } from '@/redux/services/user';
import { goods, toggleOpenCart } from '@/redux/slices/shoppingCartSlice';
import { userId } from '@/redux/slices/userSlice';

const Bottom = () => {
  const { t } = useTranslation();

  const id = useAppSelector(userId);
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(goods);
  const openCart = () => dispatch(toggleOpenCart(true));
  const { data: user } = useGetUserQuery(id ?? skipToken);

  const cartItemsCount = React.useMemo(
    () => cartItems.reduce((acc, item) => (acc += item.quantity), 0),
    [cartItems]
  );
  return (
    <div className={styles.bottom}>
      <div className={styles.wrapper}>
        {
          <DropDown
            control={
              <Button
                buttonType={ButtonType.Button}
                size={Sizes.Drop}
                variant={Variant.Drop}
                text={t('header.drop')}
                icon={<Icon.Drop />}
                iconPosition={Position.Left}
              />
            }
            tagName="A"
            options={<CategoryAll />}
            variant="category"
          />
        }
        <Search />
      </div>
      <div className={styles.icons}>
        {user && id ? (
          <UserButton {...user} />
        ) : (
          <DropDown
            options={<Menu />}
            control={<Icon.Account height="38px" width="38px" />}
            variant="menu"
            tagName="LI"
          />
        )}
        <button
          className={styles['cart-btn']}
          onClick={openCart}
          aria-label="Open cart"
        >
          <Icon.Cart height="38px" width="38px" />
          {cartItemsCount > 0 && (
            <div className={styles['cart-counter']}>
              <span>{cartItemsCount}</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Bottom;
