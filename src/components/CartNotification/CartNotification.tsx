import React from 'react';
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

const CartNotification = () => {
  const showNotification = useAppSelector(isOpen);
  const dispatch = useAppDispatch();

  const [show, setShow] = React.useState(true);
  const nodeRef = React.useRef<HTMLDivElement | null>(null);

  const toggleNotificationState = () => {
    dispatch(toggleShowCartNotification(false));
  };

  const closeNotification = () => {
    setShow(false);
  };

  const openNotification = () => {
    setShow(true);
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
        <div className={styles.container} ref={nodeRef}>
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
              <p>У кошику 1 товар </p>
              <p>Сума товарів у кошику 240 грн</p>
            </div>
          </div>
          <button type="button">Оформити замовлення</button>
        </div>
      </CSSTransition>
    </Portal>
  );
};

export default CartNotification;
