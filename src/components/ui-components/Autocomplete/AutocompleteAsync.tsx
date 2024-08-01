import classNames from 'classnames';
import AsyncSelect from 'react-select/async';

import styles from './Autocomplete.module.scss';
import { type AutoCompleteAsyncType } from './AutoComplete.types';
import { ClearIndicator } from './components/ClearIndicator';
import { DropdownIndicator } from './components/DropdownIndicator';

const AutoCompleteAsync = ({
  onChange,
  onBlur,
  value,
  errorMessage,
  requiredMessage,
  placeholder,
  defaultOptions,
  loadOptions,
  ...props
}: AutoCompleteAsyncType) => {
  const containerClName = classNames(styles.container, {
    [styles['container__error']]: errorMessage,
  });
  return (
    <div className={styles.wrapper}>
      {requiredMessage && <p className={styles.required}>{requiredMessage}</p>}
      <AsyncSelect
        value={value}
        isSearchable={true}
        noOptionsMessage={() => <p>Результатів немає</p>}
        controlShouldRenderValue
        blurInputOnSelect
        onChange={onChange}
        onBlur={onBlur}
        loadingMessage={() => <p>Загрузка</p>}
        defaultOptions={defaultOptions}
        unstyled
        isClearable
        placeholder={placeholder}
        components={{
          DropdownIndicator,
          IndicatorSeparator: null,
          ClearIndicator,
        }}
        loadOptions={loadOptions}
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
        {...props}
      />
      {errorMessage && (
        <p className={styles['message-error']}>{errorMessage}</p>
      )}
    </div>
  );
};

export default AutoCompleteAsync;
