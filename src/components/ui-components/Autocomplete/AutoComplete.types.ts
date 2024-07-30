import { type Props } from 'react-select';

export type Option = {
  value: string;
  label: string;
};

export interface AutoCompleteType
  extends Omit<Props<Option, false>, 'value' | 'options' | 'onChange'> {
  data: Option[];
  onChange: (value: Option | null) => void;
  errorMessage?: string;
  isDisabled?: boolean;
  keyChange?: string | undefined;
}

export interface AutoCompleteAsyncType
  extends Omit<Props<Option, false>, 'value' | 'options' | 'onChange'> {
  value?: Option;
  onChange: (value: Option | null) => void;
  style?: 'secondary';
  errorMessage?: string;
  searchName?: string;
  isDisabled?: boolean;
  defaultOptions: Option[];
  requiredMessage: string;
  loadOptions: (inputValue: string) => Promise<Option[]>;
}
