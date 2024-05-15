import classNames from 'classnames';
import React from 'react';

import styles from './DropDown.module.scss';

// type DropdownProps = {
//   options: React.ReactNode;
//   toggler: React.ReactNode;
// };

const DropDown = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const dropDownRef = React.useRef<HTMLDivElement | null>(null);
  const listRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    let positionLeft: boolean;
    const displayWidth = window.innerWidth;
    if (dropDownRef.current) {
      const dropdownPosition = dropDownRef.current.getBoundingClientRect();
      const center = dropdownPosition.x + dropdownPosition.width / 2;
      positionLeft = displayWidth / 2 < center;
      if (listRef.current) {
        const listWidth = listRef.current.offsetWidth;
        if (positionLeft) {
          const shift = Math.min(
            displayWidth - dropdownPosition.right,
            listWidth / 6
          );
          listRef.current.style.right = `-${shift}px`;
        } else {
          const shift = Math.min(listWidth / 6, dropdownPosition.left);
          listRef.current.style.left = `-${shift}px`;
        }
      }
    }
  }, []);

  React.useEffect(() => {
    const handleClose: EventListener = (e: Event) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    isOpen && document.body.addEventListener('click', handleClose, true);
    return () => {
      isOpen && document.body.removeEventListener('click', handleClose, true);
    };
  }, [isOpen]);

  const containerClName = classNames(styles.container, {
    [styles['open']]: isOpen,
    [styles['closed']]: !isOpen,
  });

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={dropDownRef} className={styles.dropdown}>
      <button id="close-dropdown" onClick={toggle}>
        <img
          src="/src/assets/icons/Account.svg"
          alt="profile"
          width={32}
          height={32}
        />
      </button>
      <div ref={listRef} className={containerClName}>
        <ul className={styles.list}>
          <li>Логін</li>
          <li>Створити акаунт</li>
          <li>Підтримка</li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
