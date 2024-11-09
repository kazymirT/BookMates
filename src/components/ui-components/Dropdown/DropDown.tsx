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
  tagName,
  isOverflow = false,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const dropDownRef = React.useRef<HTMLDivElement | null>(null);
  const listRef = React.useRef<HTMLDivElement | null>(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useClickOutside(dropDownRef, handleClose);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === tagName) {
        handleClose();
      }
    };

    const listContainer = listRef.current;
    if (listContainer) {
      listContainer.addEventListener('click', handleClick);
    }

    return () => {
      if (listContainer) {
        listContainer.removeEventListener('click', handleClick);
      }
    };
  }, [tagName]);

  useEffect(() => {
    isOverflow && isOpen
      ? dispatch(incrementOverlay())
      : dispatch(decrementOverlay());
  }, [dispatch, isOpen, isOverflow]);

  const containerClName = classNames(styles['dropdown-container'], {
    [styles['open']]: isOpen,
    [styles['closed']]: !isOpen,
    [styles[`dropdown-container__${variant}`]]: variant,
  });
  const iconClName = classNames(styles.icon, {
    [styles[`icon__${variant}`]]: variant,
    [styles[`icon__${variant}__open`]]: variant && isOpen,
  });
  return (
    <div ref={dropDownRef} className={styles.dropdown}>
      <div className={iconClName} onClick={handleOpen}>
        {control}
      </div>
      <div ref={listRef} className={containerClName}>
        <div className={styles.overlay}></div>
        {options}
      </div>
    </div>
  );
};

export default DropDown;
