import classNames from 'classnames';
import { useState } from 'react';

import styles from './Filter.module.scss';
import { FilterProps } from '../../Catalog.types';
import arrow from '@/assets/icons/ArrowDown.svg';
import Checkbox from '@/components/ui-components/Checkbox/Checkbox';
import { useAppDispatch } from '@/redux/hooks';
import { addFilterItem, removeFilterItem } from '@/redux/slices/queryParams';

const Filter = ({
  categories,
  title,
  isScroll,
  isDefaultOpen,
  filterType,
}: FilterProps) => {
  const [isOpen, setIsOpen] = useState(!!isDefaultOpen);
  const dispatch = useAppDispatch();

  const handleOnClick = () => setIsOpen(!isOpen);
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    checked
      ? dispatch(addFilterItem({ filterName: filterType, value }))
      : dispatch(removeFilterItem({ filterName: filterType, value }));
  };

  const arrowClassNames = classNames(styles.arrow, {
    [styles['arrow_open']]: !isOpen,
  });

  const listsClassNames = classNames(styles.lists, {
    [styles['open']]: isOpen,
    [styles['open_scroll']]: isScroll,
  });

  return (
    <div className={styles.filter}>
      <div className={styles.box} onClick={handleOnClick}>
        <h3>{title}</h3>
        <img src={arrow} className={arrowClassNames} alt="arrow icon" />
      </div>
      <ul className={listsClassNames}>
        {categories &&
          categories.map((category) => (
            <li key={`${category.id}${category.checked}`}>
              <Checkbox
                type="checkbox"
                variant="secondary"
                defaultChecked={category.checked}
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
