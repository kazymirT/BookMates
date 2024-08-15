import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './CartNotification.module.scss';
import Portal from '../Portal/Portal';
import cart from '@/assets/icons/cart.svg';
import closeImg from '@/assets/icons/Close.svg';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  isOpen,
  toggleShowCartNotification,
} from '@/redux/slices/cartNotificationSlice';
import { goods } from '@/redux/slices/shoppingCartSlice';

const CartNotification = () => {
  const showNotification = useAppSelector(isOpen);
  const cartItems = useAppSelector(goods);
  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    showNotification && closeNotificationWithDelay(1500);
  }, [showNotification]);

  const [show, setShow] = React.useState(true);
  const nodeRef = React.useRef<HTMLDivElement | null>(null);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const toggleNotificationState = () => {
    dispatch(toggleShowCartNotification(false));
  };

  const closeNotification = () => {
    setShow(false);
  };

  const openNotification = () => {
    handleStopTimer();
    setShow(true);
  };

  const closeNotificationWithDelay = (delay: number) => {
    const closeTimer = setTimeout(() => {
      setShow(false);
    }, delay);
    timerRef.current = closeTimer;
  };

  const handleStopTimer = () => {
    timerRef.current && clearTimeout(timerRef.current);
  };
  const handleClose = () => {
    closeNotificationWithDelay(300);
  };

  return (
    <Portal
      isOpen={showNotification}
      placeContent="right"
      onClickOutside={closeNotification}
    >
      <CSSTransition
        in={show}
        nodeRef={nodeRef}
        timeout={300}
        classNames={{
          appear: styles['appear'],
          appearActive: styles['appear-active'],
          exitActive: styles['exit-active'],
          exitDone: styles['exit-done'],
        }}
        appear
        onExiting={toggleNotificationState}
        onExited={openNotification}
      >
        <div
          className={styles.container}
          ref={nodeRef}
          onMouseEnter={handleStopTimer}
          onMouseLeave={handleClose}
        >
          <div className={styles.head}>
            <p>Товар додано до кошика</p>
            <button type="button" onClick={closeNotification}>
              <img src={closeImg} alt="" width={24} height={24} />
            </button>
          </div>
          <div className={styles.info}>
            <div className={styles.logo}>
              <img src={cart} alt="" width={24} height={24} />
            </div>
            <div className={styles['cart-info']}>
              <p>
                {cartItems.length === 1
                  ? `У кошику 1 товар `
                  : `У кошику ${cartItems.length} товарів `}
              </p>
              <p>{`Сума товарів у кошику ${totalPrice} грн`}</p>
            </div>
          </div>
          <button type="button">Оформити замовлення</button>
        </div>
      </CSSTransition>
    </Portal>
  );
};

export default CartNotification;
