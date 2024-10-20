import classNames from 'classnames';
import { CSSProperties, FC } from 'react';

import styles from './SliderButtonSlick.module.scss';
import { Icon } from '@/components/ui-components/Icons';

export interface SliderButtonProps {
  variant: 'banner' | 'section';
  arrow: 'next' | 'prev';
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
}
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
      <button type="button" onClick={onClick} className={btnNextClassName}>
        <Icon.Arrow_1 />
      </button>
    </>
  );
};
