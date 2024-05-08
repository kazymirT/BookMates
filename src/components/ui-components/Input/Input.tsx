import classNames from 'classnames';
import { ComponentPropsWithoutRef, forwardRef, useState } from 'react';

import styles from './Input.module.scss';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  errorMessage?: string;
  error?: boolean;
  onFocus?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, error, onFocus, ...rest }, ref) => {
    const [type, setType] = useState<boolean>(rest.type === 'password');

    const inputClassName = classNames(styles.input, {
      [styles['input-error']]: errorMessage || error,
    });

    const inputPasswordClass = classNames(styles.button, {
      [styles['password-show']]: !type,
      [styles['password-hide']]: type,
      [styles['password-error']]: errorMessage || error,
    });

    const handleFocusInput = () => (error && onFocus ? onFocus() : '');

    const handleShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setType(!type);
    };

    const inputType = rest.type === 'password' && type ? 'password' : 'text';

    return (
      <div className={styles['input-group']}>
        <input
          {...rest}
          type={inputType}
          ref={ref}
          className={inputClassName}
          onFocus={handleFocusInput}
        />
        {rest.type === 'password' && (
          <button
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
