import { InputMask } from '@react-input/mask';
import classNames from 'classnames';
import { forwardRef } from 'react';

import { UserInputProps } from './types';
import styles from './UserInput.module.scss';

const UserInput = forwardRef<HTMLInputElement, UserInputProps>(
  ({ errorMessage, variant, ...rest }, ref) => {
    const inputGroupCN = classNames(styles['input-group'], {
      [styles[`input-group__${variant}`]]: variant,
    });
    return (
      <div className={inputGroupCN}>
        {variant === 'phone' ? (
          <InputMask
            mask="+38 (___) ___-__-__"
            showMask
            replacement={{ _: /\d/ }}
            className={styles.input}
            ref={ref}
            type="text"
            {...rest}
          />
        ) : (
          <input {...rest} ref={ref} className={styles.input} />
        )}
        {!!errorMessage && <span className={styles.error}>{errorMessage}</span>}
      </div>
    );
  }
);

export default UserInput;
