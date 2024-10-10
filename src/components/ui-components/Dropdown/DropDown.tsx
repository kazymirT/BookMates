import classNames from 'classnames';
import React from 'react';

import styles from './DropDown.module.scss';
import useClickOutside from '@/hooks/useClickOutside';

type DropdownProps = {
  options: React.ReactNode[] | React.ReactNode;
  control: React.ReactNode;
  variant: 'menu' | 'category';
};

const DropDown = ({ control, options, variant }: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const dropDownRef = React.useRef<HTMLDivElement | null>(null);
  const listRef = React.useRef<HTMLDivElement | null>(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useClickOutside(dropDownRef, handleClose);

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
        {Array.isArray(options) ? (
          <ul className={styles.list}>
            {options.map((o, index) => (
              <li onClick={handleClose} key={index}>
                {o}
              </li>
            ))}
          </ul>
        ) : (
          options
        )}
      </div>
    </div>
  );
};

export default DropDown;
