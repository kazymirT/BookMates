import classNames from 'classnames';
import { FC } from 'react';
import { DropdownIndicatorProps } from 'react-select';

import { Icon } from '../../Icons';
import styles from '../Autocomplete.module.scss';
import { Option } from '../AutoComplete.types';

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
      <Icon.Arrow_1 />
    </div>
  );
};
