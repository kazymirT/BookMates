import { InputMask } from '@react-input/mask';
import classNames from 'classnames';
import { forwardRef, useId } from 'react';

import {
  INPUT_ADMIN_CONTAINER,
  INPUT_ADMIN_ERROR,
  INPUT_ADMIN_INPUT,
  INPUT_ADMIN_LABEL,
  INPUT_ADMIN_PHONE,
} from './constants';
import styles from './InputAdmin.module.scss';
import { InputAdminProps } from './InputAdmin.types';

const InputAdmin = forwardRef<HTMLInputElement, InputAdminProps>(
  ({ errorMessage, placeholder, ...rest }, ref) => {
    const id = useId();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      rest.onChange && rest.onChange(event);
    };

    const inputClassName = classNames(styles.input, {
      [styles['input-error']]: errorMessage,
    });
    return (
      <div className={styles['input-box']} data-testid={INPUT_ADMIN_CONTAINER}>
        <label htmlFor={id} data-testId={INPUT_ADMIN_LABEL}>
          {placeholder}
          {placeholder === 'Номер телефону' ? (
            <InputMask
              mask="+38 (___) ___-__-__"
              showMask
              replacement={{ _: /\d/ }}
              className={inputClassName}
              ref={ref}
              type="text"
              data-testId={INPUT_ADMIN_PHONE}
              {...rest}
            />
          ) : (
            <input
              {...rest}
              id={id}
              ref={ref}
              onChange={onChange}
              data-testId={INPUT_ADMIN_INPUT}
              className={inputClassName}
            />
          )}
        </label>
        {!!errorMessage && (
          <span className={styles.error} data-testId={INPUT_ADMIN_ERROR}>
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
);

export default InputAdmin;
