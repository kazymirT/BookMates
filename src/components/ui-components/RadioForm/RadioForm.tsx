import classNames from 'classnames';
import { FC } from 'react';

import styles from './RadioForm.module.scss';
import { RadioFormProps } from './types';

const RadioForm: FC<RadioFormProps> = ({
  options,
  value,
  onChange,
  variant = 'sort',
}) => {
  const radioOptions = options.map((option) => ({
    label: option,
    value: option,
  }));

  const handleChange = (value: string) => {
    onChange(value);
  };

  const formCN = classNames(styles.form, {
    [styles[`form__${variant}`]]: variant,
  });

  return (
    <form className={formCN}>
      {radioOptions.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name="customRadio"
            value={option.value}
            checked={value === option.value}
            onChange={() => handleChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </form>
  );
};

export default RadioForm;
