import { ClearIndicatorProps } from 'react-select';

import { Icon } from '../../Icons';
import styles from '../Autocomplete.module.scss';
import { Option } from '../AutoComplete.types';

export const ClearIndicator = (props: ClearIndicatorProps<Option, false>) => {
  const {
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div {...restInnerProps} ref={ref} className={styles.clear}>
      <Icon.Close height="18" width="18" viewBox="0, 0, 24, 24" />
    </div>
  );
};
