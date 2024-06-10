import classNames from 'classnames';
import {
  ComponentPropsWithoutRef,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import styles from './Input.module.scss';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  errorMessage?: string;
  serverError?: boolean;
  noValidate?: boolean;
  handleFocus?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      errorMessage,
      placeholder,
      serverError,
      noValidate,
      handleFocus,
      onBlur,
      ...rest
    },
    ref
  ) => {
    const [type, setType] = useState<boolean>(rest.type === 'password');
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);

    const inputClassName = classNames(styles.input, {
      [styles['input-error']]: errorMessage || serverError,
      [styles['input-valid']]: isValid && !noValidate,
    });

    const spanClassName = classNames(styles.span, {
      [styles['span-active']]: isFocus,
    });

    const inputPasswordClass = classNames(styles.button, {
      [styles['password-show']]: !type,
    });
    const handleShowPassword = () => setType(!type);
    const inputType = rest.type === 'password' && type ? 'password' : 'text';

    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(
      ref,
      () => inputRef.current || ({} as HTMLInputElement),
      [inputRef]
    );

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      if (onBlur) {
        onBlur(event);
      }
      if (inputRef.current && inputRef.current.value.length === 0) {
        setIsFocus(false);
      }
      if (!errorMessage) {
        setIsValid(true);
      }
    };

    const handleOnInput = () => {
      if (inputRef.current?.value.length !== 0) {
        setIsFocus(true);
      }
    };

    const handleClickSpan = () => {
      if (inputRef.current) {
        setIsFocus(true);
        inputRef.current.focus();
      }
    };

    return (
      <div className={styles['input-group']}>
        <input
          {...rest}
          type={inputType}
          ref={inputRef}
          className={inputClassName}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={handleOnInput}
        />
        <span className={spanClassName} onClick={handleClickSpan}>
          {placeholder}
        </span>
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
