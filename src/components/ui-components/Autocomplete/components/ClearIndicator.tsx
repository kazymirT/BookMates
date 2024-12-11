import { ClearIndicatorProps } from 'react-select';

import { Icon } from '../../Icons';
import styles from '../Autocomplete.module.scss';
import { Option } from '../AutoComplete.types';
import { AUTOCOMPLETE_CLEAR_ID } from '../constants';

export const ClearIndicator = (props: ClearIndicatorProps<Option, false>) => {
  const {
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div
      {...restInnerProps}
      ref={ref}
      className={styles.clear}
      data-testId={AUTOCOMPLETE_CLEAR_ID}
    >
      <Icon.Close height="18" width="18" viewBox="0, 0, 24, 24" />
    </div>
  );
};
