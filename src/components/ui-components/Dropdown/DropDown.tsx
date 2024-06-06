import classNames from 'classnames';
import React from 'react';

import styles from './DropDown.module.scss';

type DropdownProps = {
  options: React.ReactNode;
  control: React.ReactNode;
};

const DropDown = ({ control, options }: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const dropDownRef = React.useRef<HTMLDivElement | null>(null);
  const listRef = React.useRef<HTMLDivElement | null>(null);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  // React.useEffect(() => {
  //   let positionLeft: boolean;
  //   const displayWidth = window.innerWidth;
  //   if (dropDownRef.current) {
  //     const dropdownPosition = dropDownRef.current.getBoundingClientRect();
  //     const center = dropdownPosition.x + dropdownPosition.width / 2;
  //     positionLeft = displayWidth / 2 < center;
  //     if (listRef.current) {
  //       const listWidth = listRef.current.offsetWidth;
  //       if (positionLeft) {
  //         const shift = Math.min(
  //           displayWidth - dropdownPosition.right,
  //           listWidth / 6
  //         );
  //         listRef.current.style.right = `-${shift}px`;
  //       } else {
  //         const shift = Math.min(listWidth / 6, dropdownPosition.left);
  //         listRef.current.style.left = `-${shift}px`;
  //       }
  //     }
  //   }
  // }, []);

  const containerClName = classNames(styles.container, {
    [styles['open']]: isOpen,
    [styles['closed']]: !isOpen,
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    const closeTimer = setTimeout(() => setIsOpen(false), 200);
    timerRef.current = closeTimer;
  };

  const handleCancelTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return (
    <div ref={dropDownRef} className={styles.dropdown}>
      <div
        className={styles.icon}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
      >
        {control}
      </div>
      <div
        ref={listRef}
        className={containerClName}
        onMouseEnter={handleCancelTimer}
        onMouseLeave={handleClose}
      >
        {options}
      </div>
    </div>
  );
};

export default DropDown;
