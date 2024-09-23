import classNames from 'classnames';

import styles from './Filter.module.scss';
import FilterItem from './FilterItem';
import { FilterProps } from '../../Catalog.types';
import arrow from '@/assets/icons/ArrowDown.svg';
import { useToggleOpen } from '@/hooks/useToggleOpen';

const Filter = ({
  categories,
  title,
  isScroll,
  isDefaultOpen,
  filterType,
}: FilterProps) => {
  const { contentRef, handleToggleOpen, isOpen } =
    useToggleOpen<HTMLUListElement>({ initialState: isDefaultOpen });

  const arrowClassNames = classNames(styles.arrow, {
    [styles['arrow_open']]: !isOpen,
  });

  const listsClassNames = classNames(styles.lists, {
    [styles['open']]: isOpen,
    [styles['open_scroll']]: isScroll,
  });

  return (
    <div className={styles.filter}>
      <div className={styles.box} onClick={handleToggleOpen}>
        <h3>{title}</h3>
        <img src={arrow} className={arrowClassNames} alt="arrow icon" />
      </div>
      <ul className={listsClassNames} ref={contentRef}>
        {categories &&
          categories.map((category) => (
            <FilterItem
              key={`${category.id}${category.checked}`}
              filter={category}
              filterType={filterType}
            />
          ))}
      </ul>
    </div>
  );
};

export default Filter;
