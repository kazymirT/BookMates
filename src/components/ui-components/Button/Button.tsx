import classNames from 'classnames';
import type { FC } from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({
  variant,
  size,
  text,
  disabled,
  onClick,
  buttonType,
  iconPosition,
  icon,
  aria,
}) => {
  const buttonClassName = classNames(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    styles[`button--${iconPosition}`],
    {
      [styles['button--disabled']]: disabled,
      [styles['button--icon']]: iconPosition,
    }
  );
  return (
    <button
      className={buttonClassName}
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
      aria-label={aria}
    >
      {icon && <>{icon}</>}
      {text && <>{text}</>}
    </button>
  );
};
