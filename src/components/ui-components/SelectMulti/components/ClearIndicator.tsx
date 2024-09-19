import { ClearIndicatorProps } from 'react-select';

import { Icon } from '../../Icons';
import { Option } from '../SelectMulti.types';

export const ClearIndicator = (props: ClearIndicatorProps<Option, true>) => {
  const {
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div {...restInnerProps} ref={ref}>
      <div style={{ paddingTop: '2px' }}>
        <Icon.Close height="18" width="18" viewBox="0, 0, 24, 24" />
      </div>
    </div>
  );
};
