import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './CartInformer.module.scss';
import { Icon } from '../ui-components/Icons';
import { useCartCalculations } from '@/hooks/useCartCalculations';
import { useAppDispatch } from '@/redux/hooks';
import { toggleOpenCart } from '@/redux/slices/shoppingCartUiSlice';

const CartInformer = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { totalPrice, cartItemsCount } = useCartCalculations();

  const handleCartAction = (action: boolean) =>
    dispatch(toggleOpenCart(action));

  const cartWrapperCl = classNames(styles.cartInformer, {
    [styles.active]: cartItemsCount,
  });

  return (
    <div className={cartWrapperCl} id="cart-informer">
      <button
        type="button"
        onClick={() => handleCartAction(true)}
        className={styles.view}
        aria-label="open cart"
      >
        <span className={styles.icon}>
          <Icon.CartNew />
          <span className={styles.counter}>{cartItemsCount}</span>
        </span>
        <span className={styles.wrap}>
          <span className={styles.title}>{t('cart-informer.cart')}</span>
          <span className={styles.total}>
            {t('cart-informer.price', { totalPrice })}
          </span>
        </span>
      </button>
    </div>
  );
};

export default CartInformer;
