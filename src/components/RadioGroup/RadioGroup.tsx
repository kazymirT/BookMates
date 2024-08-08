import { useState } from 'react';

import { radioButtons } from './RadioButton/constants';
import { RadioButton } from './RadioButton/RadioButton';
import styles from './RadioGroup.module.scss';

export const RadioGroup = () => {
  const [radioValue, setRadioValue] = useState('UA');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
    // eslint-disable-next-line no-console
    console.log(e.target.value);
  };

  return (
    <div className={styles['radioGroup']}>
      {radioButtons.map(({ id, label, name }) => (
        <RadioButton
          key={id}
          id={id}
          value={label}
          name={name}
          label={label}
          checked={radioValue === label}
          onChange={handleOnChange}
        />
      ))}
    </div>
  );
};
