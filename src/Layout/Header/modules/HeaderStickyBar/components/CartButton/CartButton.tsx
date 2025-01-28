import { useMemo } from 'react';

import styles from './CartButton.module.scss';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { goods } from '@/redux/slices/shoppingCartSlice';
import { toggleOpenCart } from '@/redux/slices/shoppingCartUiSlice';

const CartButton = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(goods);

  const openCart = () => dispatch(toggleOpenCart(true));

  const cartItemsCount = useMemo(
    () => cartItems.reduce((acc, item) => (acc += item.quantity), 0),
    [cartItems]
  );
  return (
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
  );
};

export default CartButton;
