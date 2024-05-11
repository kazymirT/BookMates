import classNames from 'classnames';
import { ComponentPropsWithoutRef, forwardRef, useState } from 'react';

import styles from './Input.module.scss';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  errorMessage?: string;
  serverError?: boolean;
  handleFocus?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, serverError, handleFocus, ...rest }, ref) => {
    const [type, setType] = useState<boolean>(rest.type === 'password');

    //console.log({ errorMessage, serverError, handleFocus, ...rest });

    const inputClassName = classNames(styles.input, {
      [styles['input-error']]: errorMessage || serverError,
    });

    const inputPasswordClass = classNames(styles.button, {
      [styles['password-show']]: !type,
      [styles['password-hide']]: type,
      [styles['password-error']]: errorMessage || serverError,
    });

    const handleShowPassword = () => setType(!type);

    const inputType = rest.type === 'password' && type ? 'password' : 'text';

    return (
      <div className={styles['input-group']}>
        <input
          {...rest}
          type={inputType}
          ref={ref}
          className={inputClassName}
          onFocus={handleFocus}
        />
        {rest.type === 'password' && (
          <button
            type="button"
            className={inputPasswordClass}
            onClick={handleShowPassword}
          ></button>
        )}
        {!!errorMessage && <span className={styles.error}>{errorMessage}</span>}
      </div>
    );
  }
);

export default Input;
