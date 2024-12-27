import classNames from 'classnames';
import React from 'react';

import styles from './CartInformer.module.scss';
import { Icon } from '../ui-components/Icons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { goods, toggleOpenCart } from '@/redux/slices/shoppingCartSlice';

const CartInformer = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(goods);
  const handleOpenCart = () => dispatch(toggleOpenCart(true));
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total +
      (item.discount
        ? Number(item.discountPrice) * item.quantity
        : Number(item.price) * item.quantity),
    0
  );
  const cartItemsCount = React.useMemo(
    () => cartItems.reduce((acc, item) => (acc += item.quantity), 0),
    [cartItems]
  );
  const cartWrapperCl = classNames(styles['cart-informer'], {
    [styles.active]: cartItemsCount,
  });
  return (
    <div className={cartWrapperCl} id="cart-informer">
      <button
        type="button"
        onClick={handleOpenCart}
        className={styles['cart_informer_view']}
      >
        <span className={styles['cart_informer_icon']}>
          <Icon.CartNew />
          <span className={styles['cart_informer_counter']}>
            {cartItemsCount}
          </span>
        </span>
        <span className={styles['cart_informer_wrap']}>
          <span className={styles['cart_informer_title']}>Кошик</span>
          <span className={styles['cart_informer_total']}>
            {totalPrice} грн
          </span>
        </span>
      </button>
    </div>
  );
};

export default CartInformer;
