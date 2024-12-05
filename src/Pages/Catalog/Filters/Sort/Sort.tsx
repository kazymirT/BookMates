import { useTranslation } from 'react-i18next';

import styles from '../Filter/Filter.module.scss';
import Title from '../Title/Title';
import DropDownew from '@/components/ui-components/Dropdown/DropDown';
import RadioForm from '@/components/ui-components/RadioForm/RadioForm';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSort, sort } from '@/redux/slices/queryParams';
import {
  selectSortOptions,
  SORT_OPTIONS_STATE,
  SORT_OPTIONS_URL,
} from '@/utils/constants';

const Sort = () => {
  const { t } = useTranslation();
  const sortValue = useAppSelector(sort);
  const dispatch = useAppDispatch();
  const handleChangeSort = (value: string) => {
    dispatch(setSort(SORT_OPTIONS_STATE[value]));
  };
  return (
    <div className={styles.filter}>
      <DropDownew
        variant="filter"
        control={(toggleOpen, isOpen) => (
          <Title
            isOpen={isOpen}
            text={SORT_OPTIONS_URL[t('catalog.sort')][sortValue]}
            toggleOpen={toggleOpen}
          />
        )}
        options={(toggleOpen) => (
          <div className={styles.sort} onClick={toggleOpen}>
            <RadioForm
              onChange={handleChangeSort}
              options={selectSortOptions[t('catalog.sort')]}
              defaultValue={SORT_OPTIONS_URL[t('catalog.sort')][sortValue]}
            />
          </div>
        )}
      />
    </div>
  );
};

export default Sort;
