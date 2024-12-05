import classNames from 'classnames';
import React, { useEffect } from 'react';

import styles from './DropDown.module.scss';
import { type DropdownProps } from './types';
import useClickOutside from '@/hooks/useClickOutside';
import { useAppDispatch } from '@/redux/hooks';
import { incrementOverlay, decrementOverlay } from '@/redux/slices/overlay';

const DropDown = ({
  control,
  options,
  variant,
  isOverflow = false,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropDownRef = React.useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  const handleToggleOpen = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  useClickOutside(dropDownRef, handleClose);

  useEffect(() => {
    isOverflow && isOpen
      ? dispatch(incrementOverlay())
      : dispatch(decrementOverlay());
  }, [dispatch, isOpen, isOverflow]);

  const containerClName = classNames(styles['dropdown-container'], {
    [styles['open']]: isOpen,
    [styles['closed']]: !isOpen,
    [styles[`dropdown-container--${variant}`]]: variant,
  });

  return (
    <div ref={dropDownRef} className={styles.dropdown}>
      <div className={styles.icon}>{control(handleToggleOpen, isOpen)}</div>
      <div className={containerClName}>
        <div className={styles.overlay}></div>
        {options(handleToggleOpen, isOpen)}
      </div>
    </div>
  );
};

export default DropDown;
