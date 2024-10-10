import classNames from 'classnames';
import { forwardRef } from 'react';

import styles from './InputWithButton.module.scss';
import { InputProps } from './InputWithButton.types';

const InputWithButton = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, children, variant, ...rest }, ref) => {
    const inputClassName = classNames(styles.input);
    const boxClassName = classNames(styles.box, {
      [styles['box__error']]: errorMessage,
      [styles[`box__${variant}`]]: variant,
    });
    return (
      <div className={boxClassName}>
        <input {...rest} ref={ref} className={inputClassName} />
        {children}
      </div>
    );
  }
);

export default InputWithButton;
