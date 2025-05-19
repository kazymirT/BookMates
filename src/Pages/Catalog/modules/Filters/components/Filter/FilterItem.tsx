import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Checkbox from '@/components/ui-components/Checkbox/Checkbox';
import { useAppDispatch } from '@/redux/hooks';
import {
  addFilterItem,
  FilterType,
  removeFilterItem,
} from '@/redux/slices/queryParams';

export interface FilterItemProps {
  filter: { id: number; nameEN: string; nameUA: string; checked: boolean };
  filterType: keyof FilterType;
  onClose: () => void;
}
const FilterItem: FC<FilterItemProps> = ({ filterType, filter, onClose }) => {
  const { checked, id, nameEN, nameUA } = filter;
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    checked
      ? dispatch(
          addFilterItem({
            filterName: filterType,
            attributes: { id, nameEN, nameUA },
          })
        )
      : dispatch(
          removeFilterItem({
            filterName: filterType,
            attributes: { id, nameEN, nameUA },
          })
        );
    onClose();
  };
  i18n.language === 'en' ? nameEN : nameUA;
  return (
    <li>
      <Checkbox
        type="checkbox"
        variant="secondary"
        defaultChecked={checked}
        value={i18n.language === 'en' ? nameEN : nameUA}
        onChange={handleFilterChange}
        label={i18n.language === 'en' ? nameEN : nameUA}
      />
    </li>
  );
};

export default FilterItem;
