import classNames from 'classnames';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

import styles from '../Filter/Filter.module.scss';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  errorMessage?: string;
}

const PriceInput = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, ...rest }, ref) => {
    const inputClassName = classNames(styles.input, {
      [styles.error]: errorMessage,
    });
    return <input {...rest} ref={ref} type="text" className={inputClassName} />;
  }
);

export default PriceInput;
