import classNames from 'classnames';
import { useState, useRef, useEffect } from 'react';

import styles from './Filter.module.scss';
import { FilterProps } from '../../Catalog.types';
import arrow from '@/assets/icons/ArrowDown.svg';
import Checkbox from '@/components/ui-components/Checkbox/Checkbox';

const Filter = ({
  categories,
  title,
  onFilterChange,
  isScroll,
}: FilterProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const listRef = useRef<HTMLUListElement>(null);

  const handleToggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, event.target.checked);
    onFilterChange();
  };

  useEffect(() => {
    const ulElement = listRef.current;
    if (ulElement) {
      if (isOpen) {
        ulElement.style.height = `${ulElement.scrollHeight}px`;
        ulElement.addEventListener(
          'transitionend',
          () => {
            ulElement.style.height = 'auto';
          },
          { once: true }
        );
      } else {
        ulElement.style.height = `${ulElement.scrollHeight}px`;
        requestAnimationFrame(() => {
          ulElement.style.height = '0';
        });
      }
    }
  }, [isOpen]);

  const arrowClassNames = classNames(styles.arrow, {
    [styles['arrow_open']]: !isOpen,
  });
  const listsClassNames = classNames(styles.lists, {
    [styles.open]: isOpen,
    [styles['open_scroll']]: isScroll,
  });

  return (
    <div className={styles.filter}>
      <div className={styles.box} onClick={handleToggleOpen}>
        <h3>{title}</h3>
        <img src={arrow} className={arrowClassNames} alt="arrow icon" />
      </div>
      <ul ref={listRef} className={listsClassNames}>
        {categories &&
          categories.map((category) => (
            <li key={category.id}>
              <Checkbox
                type="checkbox"
                variant="secondary"
                value={category.name}
                onChange={handleFilterChange}
                label={category.name}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Filter;
