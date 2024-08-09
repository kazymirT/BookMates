import { Account } from './Account';
import { Arrow } from './Arrow';
import { Cart } from './Cart';
import { IconInstanceName } from '../constants';
import { IconProps } from '../types';

type IconInstance = {
  [Key in IconInstanceName]: React.FC<IconProps>;
};

export const IconInstance: IconInstance = {
  Cart,
  Arrow,
  Account,
};
