import { ComponentPropsWithoutRef, forwardRef, useId } from 'react';

import styles from './Checkbox.module.scss';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  children?: JSX.Element;
}

const Checkbox = forwardRef<HTMLInputElement, InputProps>(
  ({ label, children, ...rest }, ref) => {
    const id = useId();

    return (
      <div className={styles['checkbox-container']}>
        <input
          {...rest}
          id={id}
          type="checkbox"
          ref={ref}
          className={styles.input}
        />
        <label htmlFor={id} className={styles.label}>
          {label}
          {children && children}
        </label>
      </div>
    );
  }
);

export default Checkbox;
