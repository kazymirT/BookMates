import classNames from 'classnames';
import { forwardRef, useId } from 'react';

import styles from './InputAdmin.module.scss';
import { InputProps } from './InputAdmin.types';

const InputAdmindmin = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, serverError, onChangeFile, placeholder, ...rest }, ref) => {
    const inputClassName = classNames(styles.input, {
      [styles['input-error']]: errorMessage || serverError,
    });
    const id = useId();
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      rest.onChange && rest.onChange(event);
      onChangeFile && onChangeFile(event);
    };
    return (
      <div className={styles['input-box']}>
        <label htmlFor={id}>
          {placeholder}
          <input
            {...rest}
            id={id}
            ref={ref}
            onChange={onChange}
            className={inputClassName}
          />
        </label>
        {!!errorMessage && <span className={styles.error}>{errorMessage}</span>}
      </div>
    );
  }
);

export default InputAdmindmin;
