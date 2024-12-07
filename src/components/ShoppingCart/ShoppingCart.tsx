import React from 'react';
import { useTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';

import CartItem from './CartItem/CartItem';
import styles from './ShoppingCart.module.scss';
import Portal from '../Portal/Portal';
import { Sizes, Variant } from '../ui-components/Button/constants';
import { ButtonLink } from '../ui-components/ButtonLink/ButtonLink';
import { Icon } from '../ui-components/Icons';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import {
  isOpen,
  goods,
  toggleOpenCart,
  removePosition,
} from '@/redux/slices/shoppingCartSlice';
//import { useGetCartQuery } from '@/redux/services/cart';

const ShoppingCart = () => {
  const { t } = useTranslation();
  const isCartOpen = useAppSelector(isOpen);
  const cartItems = useAppSelector(goods);
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total +
      (item.discount
        ? Number(item.discountPrice) * item.quantity
        : Number(item.price) * item.quantity),
    0
  );
  const dispatch = useAppDispatch();

  const [show, setShow] = React.useState(true);

  const handleCloseCart = () => dispatch(toggleOpenCart(false));

  const closeCart = () => setShow(false);

  const handleDeleteItem = (id: number) => {
    dispatch(removePosition(id));
    if (cartItems.length === 1) {
      closeCart();
    }
  };
  //const {data, error} = useGetCartQuery(undefined,{skip: !isCartOpen});

  return (
    <Portal isOpen={isCartOpen} placeContent="right" onClickOutside={closeCart}>
      <CSSTransition
        in={show}
        timeout={300}
        classNames={{
          appear: styles['appear'],
          appearActive: styles['appear-active'],
          exitActive: styles['exit-active'],
          exitDone: styles['exit-done'],
        }}
        appear
        onExiting={handleCloseCart}
        onExited={() => setShow(true)}
      >
        <aside className={styles.container}>
          <div className={styles.head}>
            <h3>{t('cart.title')}</h3>
            <button onClick={closeCart}>
              <Icon.Close />
            </button>
          </div>
          {cartItems.length === 0 ? (
            <div className={styles.empty}>
              <h4>{t('cart.empty')}</h4>
            </div>
          ) : (
            <ul className={styles.list}>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <CartItem handleDeleteItem={handleDeleteItem} item={item} />
                </li>
              ))}
            </ul>
          )}
          <div className={styles.info}>
            <div className={styles.total}>
              <span>{t('cart.together')}</span>
              <span>{t('cart.total-price', { totalPrice })}</span>
            </div>
            <ButtonLink
              text={t('cart.btn')}
              type="button"
              size={Sizes.Full}
              url="/order"
              disabled={!totalPrice}
              onClick={closeCart}
              variant={Variant.Basic}
            />
          </div>
        </aside>
      </CSSTransition>
    </Portal>
  );
};

export default ShoppingCart;
