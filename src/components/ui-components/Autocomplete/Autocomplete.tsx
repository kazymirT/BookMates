import classNames from 'classnames';
import Select from 'react-select';

import styles from './Autocomplete.module.scss';
import { AutoCompleteType } from './AutoComplete.types';
import { ClearIndicator } from './components/ClearIndicator';
import { DropdownIndicator } from './components/DropdownIndicator';
import { MenuList } from './components/MenuList';
import {
  AUTOCOMPLETE_ERROR_ID,
  AUTOCOMPLETE_REQUIRED_ID,
  AUTOCOMPLETE_TEST_ID,
} from './constants';

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
      {requiredMessage && (
        <p className={styles.required} data-testId={AUTOCOMPLETE_REQUIRED_ID}>
          {requiredMessage}
        </p>
      )}
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
        data-testId={AUTOCOMPLETE_TEST_ID}
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
        <p
          className={styles['message-error']}
          data-testId={AUTOCOMPLETE_ERROR_ID}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};
