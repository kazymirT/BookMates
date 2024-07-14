import { type Props } from 'react-select';

export type Option = {
  value: string;
  label: string;
};

export interface AutoCompleteType
  extends Omit<Props<Option, false>, 'value' | 'options' | 'onChange'> {
  value: Option['value'];
  onChange: (value: Option) => void;
  style?: 'secondary';
  errorMessage?: string;
  searchName?: string;
  type: 'City' | 'Warehouses';
  isDisabled?: boolean;
}
