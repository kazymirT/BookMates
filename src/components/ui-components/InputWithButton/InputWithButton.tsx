import classNames from 'classnames';
import { forwardRef } from 'react';

import { INPUT_TEST_CONTAINER, INPUT_TEST_ID } from './constants';
import styles from './InputWithButton.module.scss';
import { InputWithButtonProps } from './InputWithButton.types';

const InputWithButton = forwardRef<HTMLInputElement, InputWithButtonProps>(
  ({ errorMessage, children, variant, ...rest }, ref) => {
    const boxClassName = classNames(styles.box, {
      [styles['box__error']]: errorMessage,
      [styles[`box__${variant}`]]: variant,
    });
    return (
      <div className={boxClassName} data-testid={INPUT_TEST_CONTAINER}>
        <input
          {...rest}
          ref={ref}
          className={styles.input}
          data-testid={INPUT_TEST_ID}
        />
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        {children}
      </div>
    );
  }
);

export default InputWithButton;
