import { Add } from './Add';
import { Cart } from './Cart';
import { IconInstanceName } from '../constants';
import { IconProps } from '../types';

type IconInstance = {
  [Key in IconInstanceName]: React.FC<IconProps>;
};

export const IconInstance: IconInstance = {
  Add,
  Cart,
};
