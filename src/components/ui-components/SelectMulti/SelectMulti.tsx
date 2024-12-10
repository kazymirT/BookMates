import classNames from 'classnames';
import { default as ReactSelect, DropdownIndicatorProps } from 'react-select';

import { ClearIndicator } from './components/ClearIndicator';
import { MultiValueRemove } from './components/MultiValueRemove';
import { SELECT_DROP_INDICATOR } from './constants';
import styles from './Select.module.scss';
import { SelectProps, Option } from './SelectMulti.types';
import arrowDown from '@/assets/icons/ArrowDown.svg';

const DropdownIndicator = (props: DropdownIndicatorProps<Option>) => {
  const clName = classNames(styles.indicator, {
    [styles['indicator_opened']]: props.selectProps.menuIsOpen,
  });
  return (
    <div className={clName} data-testid={SELECT_DROP_INDICATOR}>
      <img src={arrowDown} alt="" width={24} height={24} />
    </div>
  );
};

const optionClName = (focused: boolean) => {
  return classNames(styles.option, {
    [styles['option_focused']]: focused,
  });
};

const SelectMulti = ({
  value,
  options,
  onChange,
  error,
  helperText,
  style,
  ...props
}: SelectProps) => {
  const containerClName = classNames(styles.container, {
    [styles['container-error']]: error,
    [styles.secondary]: style,
  });
  return (
    <div className={styles.wrapper}>
      <ReactSelect
        isSearchable={false}
        unstyled
        value={value.map((val) => ({ label: val, value: val }))}
        options={options}
        onChange={(newValue) =>
          newValue && onChange(newValue.map((option) => option.value))
        }
        controlShouldRenderValue
        blurInputOnSelect
        components={{
          DropdownIndicator,
          IndicatorSeparator: null,
          MultiValueRemove,
          ClearIndicator,
        }}
        classNames={{
          container: () => containerClName,
          control: () => styles.control,
          menu: () => styles.menu,
          indicatorSeparator: () => styles.separator,
          menuList: () => styles['menu-list'],
          option: (state) => optionClName(state.isFocused),
          multiValue: () => styles.multi,
          multiValueRemove: () => styles['multi-remove'],
          valueContainer: () => styles['value-container'],
        }}
        {...props}
      />
      {helperText && <p className={styles.message}>{helperText}</p>}
    </div>
  );
};

export default SelectMulti;
