import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './BurgerMenu.module.scss';
import Portal from '@/components/Portal/Portal';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  isOpenBurgerMenu,
  toggleShowBurgerMenu,
} from '@/redux/slices/burgerMenuSlice';

const BurgerMenu = () => {
  const isProfileOpen = useAppSelector(isOpenBurgerMenu);
  const dispatch = useAppDispatch();
  const asideRef = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(true);

  const handleCloseProfile = () => dispatch(toggleShowBurgerMenu(false));

  const closeProfile = () => {
    setShow(false);
    handleCloseProfile();
  };

  return (
    <Portal
      isOpen={isProfileOpen}
      placeContent="right"
      onClickOutside={closeProfile}
    >
      <CSSTransition
        in={show}
        nodeRef={asideRef}
        timeout={300}
        classNames={{
          appear: styles['appear'],
          appearActive: styles['appear-active'],
          exit: styles['exit'],
          exitActive: styles['exit-active'],
          exitDone: styles['exit-done'],
        }}
        appear
        onExiting={handleCloseProfile}
        onExited={() => setShow(true)}
      >
        <aside className={styles.profile} ref={asideRef}>
          <p>бургер меню</p>
        </aside>
      </CSSTransition>
    </Portal>
  );
};

export default BurgerMenu;
