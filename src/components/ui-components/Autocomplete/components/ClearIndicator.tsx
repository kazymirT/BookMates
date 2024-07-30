import { ClearIndicatorProps } from 'react-select';

import styles from '../Autocomplete.module.scss';
import { Option } from '../AutoComplete.types';
import close from '@/assets/icons/Close.svg';

export const ClearIndicator = (props: ClearIndicatorProps<Option, false>) => {
  const {
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div {...restInnerProps} ref={ref} className={styles.clear}>
      <img src={close} alt="" width={18} height={18} />
    </div>
  );
};
