import classNames from 'classnames';
import { FC } from 'react';

import styles from './SliderButton.module.scss';
import { Icon } from '@/components/ui-components/Icons';

export interface SliderButtonProps {
  onNext: () => void;
  onPrev: () => void;
  variant: 'banner' | 'section';
}
export const SliderButton: FC<SliderButtonProps> = ({
  onNext,
  onPrev,
  variant,
}) => {
  const btnNextClassName = classNames(styles['btn-next'], {
    [styles[`btn-next__${variant}`]]: variant,
  });
  const btnPrevClassName = classNames(styles['btn-prev'], {
    [styles[`btn-prev__${variant}`]]: variant,
  });
  return (
    <>
      <button onClick={onNext} className={btnNextClassName}>
        <Icon.Arrow_1 />
      </button>
      <button onClick={onPrev} className={btnPrevClassName}>
        <Icon.Arrow_1 />
      </button>
    </>
  );
};
