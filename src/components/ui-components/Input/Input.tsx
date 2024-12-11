import classNames from 'classnames';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import {
  INPUT_ERROR_MESSAGE,
  INPUT_PASSWORD_BUTTON,
  INPUT_REQUIRED_MESSAGE,
  INPUT_SPAN_ID,
  INPUT_TEST_ID,
} from './constants';
import styles from './Input.module.scss';
import { type InputProps } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      errorMessage,
      placeholder,
      serverError,
      noValidate,
      requiredMessage,
      onFocus,
      onBlur,
      ...rest
    },
    ref
  ) => {
    const [type, setType] = useState(rest.type === 'password');
    const [isFocus, setIsFocus] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [isAnimation, setIsAnimation] = useState(false);
    const inputType = rest.type === 'password' && type ? 'password' : 'text';

    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(
      ref,
      () => inputRef.current || ({} as HTMLInputElement),
      [inputRef]
    );

    useEffect(() => {
      if (inputRef.current) {
        const { value } = inputRef.current;

        if (value.length) {
          setIsFocus(true);
        }
        !value.length &&
          inputRef.current !== document.activeElement &&
          setIsFocus(false);
      }
    }, [inputRef.current?.value.length]);

    const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsAnimation(true);
      onBlur?.(event);
      if (inputRef.current && inputRef.current.value.length === 0) {
        setIsFocus(false);
      }
      !errorMessage && setIsValid(true);
    };
    const handleOnInput = () => {
      inputRef.current?.value.length !== 0 && setIsFocus(true);
    };
    const handleOnFocus = () => {
      onFocus && onFocus();
      setIsAnimation(true);
    };
    const handleClickSpan = () => {
      if (inputRef.current) {
        setIsFocus(true);
        inputRef.current.focus();
      }
    };
    const handleShowPassword = () => setType(!type);

    const inputClassName = classNames(styles.input, {
      [styles['input-error']]: errorMessage || serverError,
      [styles['input-valid']]: isValid && !noValidate,
    });

    const spanClassName = classNames(styles.span, {
      [styles['span-active']]: isFocus,
      [styles['span-inactive']]: !isFocus,
      [styles['span-animation']]: isAnimation,
    });

    const inputPasswordClass = classNames(styles.button, {
      [styles['password-show']]: !type,
    });
    return (
      <div className={styles.box}>
        {requiredMessage && (
          <p className={styles.required} data-testId={INPUT_REQUIRED_MESSAGE}>
            {placeholder}
          </p>
        )}
        <div className={styles['input-group']}>
          <input
            {...rest}
            type={inputType}
            ref={inputRef}
            className={inputClassName}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onInput={handleOnInput}
            data-testId={INPUT_TEST_ID}
          />
          <span
            className={spanClassName}
            data-testId={INPUT_SPAN_ID}
            onClick={handleClickSpan}
          >
            {placeholder}
          </span>
          {rest.type === 'password' && (
            <button
              type="button"
              className={inputPasswordClass}
              data-testId={INPUT_PASSWORD_BUTTON}
              onClick={handleShowPassword}
            ></button>
          )}
          {!!errorMessage && (
            <span className={styles.error} data-testId={INPUT_ERROR_MESSAGE}>
              {errorMessage}
            </span>
          )}
        </div>
      </div>
    );
  }
);

export default Input;
