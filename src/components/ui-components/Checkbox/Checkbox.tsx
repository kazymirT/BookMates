import classNames from 'classnames';
import { ComponentPropsWithoutRef, forwardRef, useId } from 'react';

import styles from './Checkbox.module.scss';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  errorMessage?: string;
  name?: string;
  value?: string;
  type: 'checkbox' | 'radio';
  children?: JSX.Element;
  variant: 'primary' | 'secondary';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

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
      [styles['primary']]: variant === 'primary',
      [styles['secondary']]: variant === 'secondary',
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
        />
        <label htmlFor={id} className={styles.label}>
          {label}
          {children && children}
        </label>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </div>
    );
  }
);

export default Checkbox;
