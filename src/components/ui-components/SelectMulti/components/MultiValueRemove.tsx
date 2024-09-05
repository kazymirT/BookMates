import { components, MultiValueRemoveProps } from 'react-select';

import { Icon } from '../../Icons';
import { Option } from '../SelectMulti.types';

export const MultiValueRemove = (props: MultiValueRemoveProps<Option>) => {
  return (
    <>
      <components.MultiValueRemove {...props}>
        <Icon.Close height="10" width="10" viewBox="0, 0, 24, 24" />
      </components.MultiValueRemove>
    </>
  );
};
