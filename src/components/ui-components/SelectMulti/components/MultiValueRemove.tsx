import { components, MultiValueRemoveProps } from 'react-select';

import { Icon } from '../../Icons';
import { SELECT_MULTI_VALUE_REMOVE } from '../constants';
import { Option } from '../SelectMulti.types';

export const MultiValueRemove = (props: MultiValueRemoveProps<Option>) => {
  return (
    <>
      <components.MultiValueRemove
        {...props}
        data-testid={SELECT_MULTI_VALUE_REMOVE}
      >
        <div data-testid={SELECT_MULTI_VALUE_REMOVE}>
          <Icon.Close height="10" width="10" viewBox="0, 0, 24, 24" />
        </div>
      </components.MultiValueRemove>
    </>
  );
};
