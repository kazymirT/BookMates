import { FC } from 'react';

import Checkbox from '@/components/ui-components/Checkbox/Checkbox';
import { useAppDispatch } from '@/redux/hooks';
import {
  addFilterItem,
  FilterType,
  removeFilterItem,
} from '@/redux/slices/queryParams';

export interface FilterItemProps {
  filter: { id: number; name: string; checked: boolean };
  filterType: keyof FilterType;
  onClose: () => void;
}
const FilterItem: FC<FilterItemProps> = ({ filterType, filter, onClose }) => {
  const { checked, id, name } = filter;

  const dispatch = useAppDispatch();
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    checked
      ? dispatch(
          addFilterItem({ filterName: filterType, attributes: { id, name } })
        )
      : dispatch(
          removeFilterItem({ filterName: filterType, attributes: { id, name } })
        );
    onClose();
  };
  return (
    <li>
      <Checkbox
        type="checkbox"
        variant="secondary"
        defaultChecked={checked}
        value={name}
        onChange={handleFilterChange}
        label={name}
      />
    </li>
  );
};

export default FilterItem;
