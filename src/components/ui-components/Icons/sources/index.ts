import { Account } from './Account';
import { Arrow } from './Arrow';
import { Arrow_1 } from './Arrow_1';
import { Cart } from './Cart';
import { Close } from './Close';
import { Edit } from './Edit';
import { IconInstanceName } from '../constants';
import { IconProps } from '../types';

type IconInstance = {
  [Key in IconInstanceName]: React.FC<IconProps>;
};

export const IconInstance: IconInstance = {
  Cart,
  Arrow,
  Arrow_1,
  Account,
  Edit,
  Close,
};
