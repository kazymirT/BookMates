import { FC, useState } from 'react';

import styles from './RadioForm.module.scss';
import { RadioFormProps } from './types';

const RadioForm: FC<RadioFormProps> = ({ options, defaultValue, onChange }) => {
  const [selected, setSelected] = useState(defaultValue || '');

  const radioOptions = options.map((option) => ({
    label: option,
    value: option,
  }));

  const handleChange = (value: string) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <form className={styles.form}>
      {radioOptions.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name="customRadio"
            value={option.value}
            checked={selected === option.value}
            onChange={() => handleChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </form>
  );
};

export default RadioForm;
