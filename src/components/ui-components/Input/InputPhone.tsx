import { InputMask } from '@react-input/mask';
import classNames from 'classnames';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

import { INPUT_PHONE_REQUIRED } from './constants';
import styles from './Input.module.scss';
import { type InputProps } from './Input.types';

const InputPhone = forwardRef<HTMLInputElement, InputProps>(
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
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);
    const [init, setInit] = useState<boolean>(true);
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
      // if (inputRef.current && inputRef.current.value.length === 0) {
      //   setIsFocus(false);
      // }
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
      if (inputRef.current) {
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
    return (
      <div className={styles.box}>
        {requiredMessage && (
          <p className={styles.required} data-testid={INPUT_PHONE_REQUIRED}>
            {placeholder}
          </p>
        )}

        <div className={styles['input-group']}>
          <InputMask
            mask="+38 (___) ___-__-__"
            showMask
            replacement={{ _: /\d/ }}
            className={inputClassName}
            ref={inputRef}
            type="text"
            onInput={handleOnInput}
            onBlur={handleBlur}
            onFocus={onFocus}
            {...rest}
          />
          <span className={spanClassName} onClick={handleClickSpan}>
            {placeholder}
          </span>
          {!!errorMessage && (
            <span className={styles.error}>{errorMessage}</span>
          )}
        </div>
      </div>
    );
  }
);

export default InputPhone;
