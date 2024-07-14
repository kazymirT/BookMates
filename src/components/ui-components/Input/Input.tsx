import { InputMask } from '@react-input/mask';
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
  requiredMessage?: boolean;
  handleFocus?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      errorMessage,
      placeholder,
      serverError,
      noValidate,
      requiredMessage,
      handleFocus,
      onBlur,
      ...rest
    },
    ref
  ) => {
    const [type, setType] = useState<boolean>(rest.type === 'password');
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);
    const [init, setInit] = useState<boolean>(true);
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
        setInit(false);
      }
    };

    const handleClickSpan = () => {
      if (inputRef.current) {
        setIsFocus(true);
        setInit(false);
        inputRef.current.focus();
        setCursor();
      }
    };
    const setCursor = () => {
      if (placeholder === 'Телефон' && inputRef.current) {
        const event = new Event('input', { bubbles: true });
        inputRef.current.dispatchEvent(event);
        const value = inputRef.current.value;
        const dashIndex = value.indexOf('_');

        if (dashIndex !== -1) {
          inputRef.current.dispatchEvent(event);
          inputRef.current.setSelectionRange(dashIndex, dashIndex);
        }
      }
    };
    const inputClassName = classNames(styles.input, {
      [styles['input-error']]: errorMessage || serverError,
      [styles['input-valid']]: isValid && !noValidate,
    });

    const spanClassName = classNames(styles.span, {
      [styles['span-active']]: isFocus,
      [styles['span-inactive']]: !isFocus && !init,
    });

    const inputPasswordClass = classNames(styles.button, {
      [styles['password-show']]: !type,
    });
    return (
      <div className={styles.box}>
        {requiredMessage && <p className={styles.required}>{placeholder}</p>}

        <div className={styles['input-group']}>
          {placeholder === 'Телефон' ? (
            <InputMask
              mask="+38 (___) ___-__-__"
              showMask
              replacement={{ _: /\d/ }}
              className={inputClassName}
              ref={inputRef}
              type={inputType}
              onInput={handleOnInput}
              onBlur={handleBlur}
              onFocus={handleFocus}
              {...rest}
            />
          ) : (
            <input
              {...rest}
              type={inputType}
              ref={inputRef}
              className={inputClassName}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onInput={handleOnInput}
            />
          )}

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
          {!!errorMessage && (
            <span className={styles.error}>{errorMessage}</span>
          )}
        </div>
      </div>
    );
  }
);

export default Input;
