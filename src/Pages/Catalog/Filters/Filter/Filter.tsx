import classNames from 'classnames';

import styles from './Filter.module.scss';
import FilterItem from './FilterItem';
import { FilterProps } from '../../Catalog.types';
import DropDown from '@/components/ui-components/Dropdown/DropDown';

const Filter = ({ categories, title, filterType }: FilterProps) => {
  const listsClassNames = classNames(styles.lists, {
    [styles['open']]: true,
    [styles['open_scroll']]: true,
  });

  return (
    <div className={styles.filter}>
      <DropDown
        tagName="LI"
        variant="filter"
        control={<h3 className={styles.title}>{title}</h3>}
        options={
          <ul className={listsClassNames}>
            {categories &&
              categories.map((category) => (
                <FilterItem
                  key={`${category.id}${category.checked}`}
                  filter={category}
                  filterType={filterType}
                />
              ))}
          </ul>
        }
      />
    </div>
  );
};

export default Filter;
