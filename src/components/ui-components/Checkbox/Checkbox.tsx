import classNames from 'classnames';
import { forwardRef, useId } from 'react';

import styles from './Checkbox.module.scss';
import {
  CHECKBOX_ERROR_TEST_ID,
  CHECKBOX_LABEL_TEST_ID,
  CHECKBOX_TEST_ID,
} from './constants';
import { InputProps } from './types';

const Checkbox = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      errorMessage,
      variant,
      value,
      name,
      type,
      onChange,
      children,
      ...rest
    },
    ref
  ) => {
    const id = useId();
    const checkboxClassNames = classNames(styles['checkbox-container'], {
      [styles[`checkbox-container__${variant}`]]: variant,
    });
    return (
      <div className={checkboxClassNames}>
        <input
          {...rest}
          id={id}
          type={type}
          value={value}
          ref={ref}
          onChange={onChange}
          name={name}
          className={styles.input}
          data-testid={CHECKBOX_TEST_ID}
        />
        <label
          htmlFor={id}
          className={styles.label}
          data-testid={CHECKBOX_LABEL_TEST_ID}
        >
          {label}
          {children && children}
        </label>
        {errorMessage && (
          <p className={styles.error} data-testid={CHECKBOX_ERROR_TEST_ID}>
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

export default Checkbox;
