import { ClearIndicatorProps } from 'react-select';

import { Icon } from '../../Icons';
import { SELECT_CLEAR_INDICATOR } from '../constants';
import { Option } from '../SelectMulti.types';

export const ClearIndicator = (props: ClearIndicatorProps<Option, true>) => {
  const {
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div {...restInnerProps} ref={ref} data-testid={SELECT_CLEAR_INDICATOR}>
      <div style={{ paddingTop: '2px' }}>
        <Icon.Close height="18" width="18" viewBox="0, 0, 24, 24" />
      </div>
    </div>
  );
};
