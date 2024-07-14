import classNames from 'classnames';
import { DropdownIndicatorProps } from 'react-select';
import AsyncSelect from 'react-select/async';

import styles from './AutoComplete.module.scss';
import { AutoCompleteType, Option } from './AutoComplete.types';
import arrowDown from '@/assets/icons/ArrowDown.svg';
import { useAppDispatch } from '@/redux/hooks';
import { Address, novaApi, Warehouses } from '@/redux/services/novaApi';

const DropdownIndicator = (props: DropdownIndicatorProps<Option>) => {
  const clName = classNames(styles.indicator, {
    [styles['indicator_opened']]: props.selectProps.menuIsOpen,
  });
  return (
    <div className={clName}>
      <img src={arrowDown} alt="" width={24} height={24} />
    </div>
  );
};
const optionClName = (focused: boolean) => {
  return classNames(styles.option, {
    [styles['option_focused']]: focused,
  });
};
const AutoComplete = ({
  onChange,
  onBlur,
  type,
  value,
  searchName,
  isDisabled,
  errorMessage,
  placeholder,
  ...props
}: AutoCompleteType) => {
  const dispatch = useAppDispatch();

  const promiseOptionsCity = async (inputValue: string): Promise<Address[]> => {
    const result = await dispatch(
      novaApi.endpoints.getSettlements.initiate(inputValue)
    ).unwrap();
    return result;
  };
  const promiseOptionsWarehouses = async (): Promise<Warehouses[]> => {
    const result = await dispatch(
      novaApi.endpoints.getWarehouses.initiate(searchName ?? '')
    ).unwrap();
    return result;
  };

  const selectValue = value ? { value, label: value } : undefined;
  const containerClName = classNames(styles.container, {
    [styles['container-error']]: errorMessage,
  });
  return (
    <div className={styles.wrapper}>
      <p className={styles.required}>{placeholder}</p>
      <AsyncSelect
        value={selectValue}
        isSearchable={true}
        cacheOptions
        noOptionsMessage={() => <p>Почніть вводити дані</p>}
        controlShouldRenderValue
        blurInputOnSelect
        isDisabled={isDisabled ? isDisabled : false}
        onChange={(newValue) => newValue && onChange(newValue)}
        onBlur={onBlur}
        unstyled
        placeholder={placeholder}
        components={{ DropdownIndicator, IndicatorSeparator: null }}
        loadOptions={
          type === 'City' ? promiseOptionsCity : promiseOptionsWarehouses
        }
        classNames={{
          container: () => containerClName,
          control: () => styles.control,
          menu: () => styles.menu,
          indicatorSeparator: () => styles.separator,
          menuList: () => styles['menu-list'],
          input: () => styles.input,
          placeholder: () => styles.placeholder,
          option: (state) => optionClName(state.isFocused),
        }}
        {...props}
      />
      {errorMessage && (
        <p className={styles['message-error']}>{'Це поле є обов`язковим.'}</p>
      )}
    </div>
  );
};

export default AutoComplete;
