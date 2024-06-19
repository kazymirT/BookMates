import styles from './CatalogHeader.module.scss';
import { CatalogHeaderProps } from '../Catalog.types';
import Select from '@/components/ui-components/Select/Select';
import { selectSortOptions } from '@/utils/constants';

const CatalogHeader = ({
  handleChangeSort,
  sortProduct,
}: CatalogHeaderProps) => {
  return (
    <div className={styles.title}>
      <h2>Каталог</h2>
      <div className={styles.sort}>
        <Select
          style="secondary"
          onChange={handleChangeSort}
          options={selectSortOptions}
          value={sortProduct}
          aria-label="sort by options"
        />
      </div>
    </div>
  );
};

export default CatalogHeader;
