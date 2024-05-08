import { ComponentPropsWithoutRef, forwardRef, useId } from 'react';

import styles from './Checkbox.module.scss';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...rest }, ref) => {
    const id = useId();

    return (
      <div className={styles['checkbox-container']}>
        <input {...rest} id={id} ref={ref} className={styles.input} />
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      </div>
    );
  }
);

export default Checkbox;
