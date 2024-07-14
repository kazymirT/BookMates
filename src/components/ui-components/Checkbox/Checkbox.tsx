import { ComponentPropsWithoutRef, forwardRef, useId } from 'react';

import styles from './Checkbox.module.scss';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  errorMessage?: string;
  name?: string;
  value?: string;
  type: 'checkbox' | 'radio';
  children?: JSX.Element;
}

const Checkbox = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, value, name, type, children, ...rest }, ref) => {
    const id = useId();

    return (
      <div className={styles['checkbox-container']}>
        <input
          {...rest}
          id={id}
          type={type}
          value={value}
          ref={ref}
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
