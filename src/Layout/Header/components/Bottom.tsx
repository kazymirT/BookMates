import { skipToken } from '@reduxjs/toolkit/query/react';
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import CategoryItem from './CategoryAll/CategoryItem';
import styles from '../Header.module.scss';
import { LoadingGroup } from '@/components/RadioGroup/LoadingGroup';
import Search from '@/components/Search/Search';
import { Button } from '@/components/ui-components/Button/Button';
import {
  Position,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import DropDown from '@/components/ui-components/Dropdown/DropDown';
import { Icon } from '@/components/ui-components/Icons';
import UserButton from '@/Layout/Header/UserButton/UserButton';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useGetUserQuery } from '@/redux/services/user';
import { goods } from '@/redux/slices/shoppingCartSlice';
import { toggleOpenCart } from '@/redux/slices/shoppingCartUiSlice';
import { userId } from '@/redux/slices/userSlice';

const CategoryAllLazy = React.lazy(() => import('./CategoryAll/CategoryAll'));
const MenuLazy = React.lazy(() => import('../Menu/Menu'));

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
            isOverflow
            control={(toggleOpen) => (
              <Button
                type="button"
                size={Sizes.Drop}
                variant={Variant.Drop}
                text={t('header.drop')}
                icon={<Icon.Drop />}
                onClick={toggleOpen}
                iconPosition={Position.Left}
              />
            )}
            options={(toggleOpen) => (
              <Suspense>
                <CategoryAllLazy>
                  {(id, name) => (
                    <CategoryItem id={id} name={name} onClose={toggleOpen} />
                  )}
                </CategoryAllLazy>
              </Suspense>
            )}
            variant="category"
          />
        }
        <Search />
      </div>
      <div className={styles.icons}>
        <LoadingGroup />
        {user && id ? (
          <UserButton {...user} />
        ) : (
          <DropDown
            options={(toggleOpen) => (
              <Suspense>
                <MenuLazy onClose={toggleOpen} />
              </Suspense>
            )}
            control={(toggleOpen) => (
              <Button
                type="button"
                size={Sizes.IconS}
                variant={Variant.Icon}
                icon={<Icon.Account height="28px" width="28px" />}
                onClick={toggleOpen}
                iconPosition={Position.Left}
              />
            )}
            variant="menu"
            isOverflow
          />
        )}
        <button
          className={styles['cart-btn']}
          onClick={openCart}
          aria-label="Open cart"
        >
          <Icon.Cart height="28px" width="28px" />
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
