import { useTranslation } from 'react-i18next';

import styles from './CatalogHeader.module.scss';
import Select from '@/components/ui-components/Select/Select';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSort, sort } from '@/redux/slices/queryParams';
import { selectSortOptions } from '@/utils/constants';

const CatalogHeader = () => {
  const { t } = useTranslation();
  const sortValue = useAppSelector(sort);
  const dispatch = useAppDispatch();
  const handleChangeSort = (value: string) => {
    dispatch(setSort(value));
  };

  return (
    <div className={styles.title}>
      <h2>{t('catalog.title')}</h2>
      <div className={styles.sort}>
        <Select
          style="secondary"
          onChange={handleChangeSort}
          options={selectSortOptions}
          value={sortValue}
          aria-label="sort by options"
        />
      </div>
    </div>
  );
};

export default CatalogHeader;
