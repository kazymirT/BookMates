import { useMemo } from 'react';

import styles from './CartButton.module.scss';
import { sizes } from '../../../UserActionsIcon/constants';
import { Icon } from '@/components/ui-components/Icons';
import useResponsive from '@/hooks/useResponsive';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { goods } from '@/redux/slices/shoppingCartSlice';
import { toggleOpenCart } from '@/redux/slices/shoppingCartUiSlice';

const CartButton = () => {
  const screen = useResponsive();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(goods);

  const openCart = () => dispatch(toggleOpenCart(true));

  const cartItemsCount = useMemo(
    () => cartItems.reduce((acc, item) => (acc += item.quantity), 0),
    [cartItems]
  );
  const size = sizes[screen || 'desktop'];
  return (
    <button
      className={styles['cart-btn']}
      onClick={openCart}
      aria-label="Open cart"
    >
      <Icon.Cart height={size} width={size} />
      {cartItemsCount > 0 && (
        <div className={styles['cart-counter']}>
          <span>{cartItemsCount}</span>
        </div>
      )}
    </button>
  );
};

export default CartButton;
