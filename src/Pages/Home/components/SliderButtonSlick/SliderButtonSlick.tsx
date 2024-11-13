import classNames from 'classnames';
import { FC } from 'react';

import styles from './SliderButtonSlick.module.scss';
import { SliderButtonProps } from './types';
import { Icon } from '@/components/ui-components/Icons';

export const SliderButtonSlick: FC<SliderButtonProps> = ({
  variant,
  arrow,
  onClick,
}) => {
  const btnNextClassName = classNames(styles.btn, {
    [styles[`btn__${arrow}__${variant}`]]: variant,
    [styles[`btn__${arrow}`]]: arrow,
  });
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        aria-label={`slide ${arrow}`}
        className={btnNextClassName}
      >
        <Icon.Arrow_1 />
      </button>
    </>
  );
};
