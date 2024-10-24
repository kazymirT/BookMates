import classNames from 'classnames';
import React, { useEffect } from 'react';

import styles from './DropDown.module.scss';
import { type DropdownProps } from './types';
import useClickOutside from '@/hooks/useClickOutside';

const DropDown = ({ control, options, variant, tagName }: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

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

  const containerClName = classNames(styles['dropdown-container'], {
    [styles['open']]: isOpen,
    [styles['closed']]: !isOpen,
    [styles[`dropdown-container__${variant}`]]: variant,
  });

  return (
    <div ref={dropDownRef} className={styles.dropdown}>
      <div className={styles.icon} onClick={handleOpen}>
        {control}
      </div>
      <div ref={listRef} className={containerClName}>
        {options}
      </div>
    </div>
  );
};

export default DropDown;
