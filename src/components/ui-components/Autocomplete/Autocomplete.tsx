import classNames from 'classnames';
import Select from 'react-select';

import styles from './Autocomplete.module.scss';
import { AutoCompleteType } from './AutoComplete.types';
import { ClearIndicator } from './components/ClearIndicator';
import { DropdownIndicator } from './components/DropdownIndicator';
import { MenuList } from './components/MenuList';

export const SearchAutocomplete = ({
  data,
  onChange,
  onBlur,
  placeholder,
  isDisabled,
  errorMessage,
  requiredMessage,
  keyChange,
}: AutoCompleteType) => {
  const containerClName = classNames(styles.container, {
    [styles['container__error']]: errorMessage,
    [styles['container__disabled']]: isDisabled,
  });
  return (
    <div className={styles.wrapper}>
      {requiredMessage && <p className={styles.required}>{requiredMessage}</p>}
      <Select
        key={`my_unique_select_key__${keyChange}`}
        placeholder={placeholder}
        unstyled
        noOptionsMessage={() => <p>Почніть вводити назву вашого міста</p>}
        isClearable
        onChange={onChange}
        onBlur={onBlur}
        isSearchable
        isMulti={false}
        isDisabled={isDisabled}
        openMenuOnClick
        openMenuOnFocus
        options={data}
        components={{
          DropdownIndicator,
          IndicatorSeparator: null,
          ClearIndicator,
          MenuList,
        }}
        classNames={{
          container: () => containerClName,
          control: () => styles.control,
          menu: () => styles.menu,
          indicatorSeparator: () => styles.separator,
          menuList: () => styles['menu-list'],
          input: () => styles.input,
          placeholder: () => styles.placeholder,
          option: () => styles.option,
        }}
      />
      {errorMessage && (
        <p className={styles['message-error']}>{errorMessage}</p>
      )}
    </div>
  );
};
