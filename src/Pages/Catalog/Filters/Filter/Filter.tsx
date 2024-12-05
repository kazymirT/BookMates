import styles from './Filter.module.scss';
import FilterItem from './FilterItem';
import { FilterProps } from '../../Catalog.types';
import Title from '../Title/Title';
import DropDownew from '@/components/ui-components/Dropdown/DropDown';

const Filter = ({ categories, title, filterType }: FilterProps) => {
  return (
    <div className={styles.filter}>
      <DropDownew
        variant="filter"
        control={(toggleOpen, isOpen) => (
          <Title text={title} toggleOpen={toggleOpen} isOpen={isOpen} />
        )}
        options={(toggleOpen) => (
          <ul className={styles.lists}>
            {categories &&
              categories.map((category) => (
                <FilterItem
                  onClose={toggleOpen}
                  key={`${category.id}${category.checked}`}
                  filter={category}
                  filterType={filterType}
                />
              ))}
          </ul>
        )}
      />
    </div>
  );
};

export default Filter;
