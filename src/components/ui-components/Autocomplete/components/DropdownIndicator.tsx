import classNames from 'classnames';
import { FC } from 'react';
import { DropdownIndicatorProps } from 'react-select';

import styles from '../Autocomplete.module.scss';
import { Option } from '../AutoComplete.types';
import arrowDown from '@/assets/icons/ArrowDown.svg';

export const DropdownIndicator: FC<DropdownIndicatorProps<Option>> = (
  props
) => {
  const clName = classNames(styles.indicator, {
    [styles['indicator_opened']]: props.selectProps.menuIsOpen,
  });
  return (
    <div
      className={clName}
      style={{ display: `${props.selectProps.value ? 'none' : 'flex'}` }}
    >
      <img src={arrowDown} alt="" width={24} height={24} />
    </div>
  );
};
