import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { MENU_ITEMS } from './constants';
import styles from './Menu.module.scss';
import { type MenuProps } from './types';
import { useAppDispatch } from '@/redux/hooks';
import { ModalState, toggleModal } from '@/redux/slices/modalSlice';

const Menu: FC<MenuProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleMenuClick = useCallback(
    (modalType: ModalState['openedModalType']) => {
      dispatch(toggleModal({ openedModalType: modalType }));
      onClose();
    },
    [dispatch, onClose]
  );

  return (
    <ul className={styles.list} role="menu" aria-label="User Menu">
      {MENU_ITEMS.map(({ key, label, modalType }) => (
        <li key={key} className={styles.listItem}>
          <button
            tabIndex={0}
            role="menuitem"
            type="button"
            onClick={() => handleMenuClick(modalType)}
          >
            {t(label)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
