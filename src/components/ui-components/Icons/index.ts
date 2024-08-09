import { FC } from 'react';

import { IconAppName } from './constants';
import makeIcon from './MakeIcon';
import { IconInstance } from './sources';
import { IconProps } from './types';

type Icon = {
  [Key in IconAppName]: FC<IconProps>;
};

export const Icon: Icon = {
  [IconAppName.CART]: makeIcon(IconInstance.Cart, {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
  }),
};
