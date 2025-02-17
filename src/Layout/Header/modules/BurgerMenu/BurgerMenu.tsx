import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './BurgerMenu.module.scss';
import CategoryItem from '../CategoryDropdown/components/CategoryItem/CategoryItem';
import LanguageSwitcher from '../HeaderTopBar/components/LanguageSwitcher/LanguageSwitcher';
import Navigation from '../HeaderTopBar/components/Navigation/Navigation';
import img from '@/assets/BookMates.svg';
import img1 from '@/assets/Vector.svg';
import Portal from '@/components/Portal/Portal';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useGetAllAttributesQuery } from '@/redux/services/attributes';
import {
  isOpenBurgerMenu,
  toggleShowBurgerMenu,
} from '@/redux/slices/burgerMenuSlice';
const BurgerMenu = () => {
  const isOpen = useAppSelector(isOpenBurgerMenu);
  const dispatch = useAppDispatch();
  const asideRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(true);

  const handleCloseProfile = () => dispatch(toggleShowBurgerMenu(false));

  const closeProfile = () => {
    setShow(false);
    handleCloseProfile();
  };
  const { data, isSuccess } = useGetAllAttributesQuery();
  return (
    <Portal isOpen={isOpen} placeContent="right" onClickOutside={closeProfile}>
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
        <div className={styles['burger-menu']} ref={asideRef}>
          <Button
            size={Sizes.IconS}
            variant={Variant.Icon}
            onClick={closeProfile}
            icon={<Icon.Close width="26px" height="26px" />}
          />
          <div className={styles.content}>
            <img src={img} alt="icon logo" width={193} height={36} />
            <nav>
              <ul className={styles.categories}>
                {isSuccess &&
                  data.categories.slice(0, 10).map(({ id, name }) => (
                    <li key={id}>
                      <CategoryItem
                        id={id}
                        name={name}
                        onClose={handleCloseProfile}
                      />
                    </li>
                  ))}
              </ul>
            </nav>
            <div className={styles.links}>
              <Navigation />
              <img src={img1} alt="" width={317} height={248} />
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};

export default BurgerMenu;
