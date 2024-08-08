import classNames from 'classnames';
import type { FC } from 'react';

import styles from './RadioButton.module.scss';
import { RadioBtnProps } from './RadioButton.types';

export const RadioButton: FC<RadioBtnProps> = ({
  id,
  label,
  name,
  value,
  checked,
  onChange,
}) => {
  const radioClassNames = classNames(styles['radio-group__button'], {
    [styles['radio-group__button--checked']]: checked,
  });
  return (
    <div className={radioClassNames}>
      <input
        className={styles['radio-button__input']}
        value={value}
        type="radio"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className={styles['radio-button__label']}>
        {label}
      </label>
    </div>
  );
};
