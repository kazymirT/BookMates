import { Account } from './Account';
import { Arrow } from './Arrow';
import { Arrow_1 } from './Arrow_1';
import { Burger } from './Burger';
import { Cart } from './Cart';
import { CartNew } from './CartNew';
import { Close } from './Close';
import { Drop } from './Drop';
import { Edit } from './Edit';
import { Logout } from './Logout';
import { Plus } from './Plus';
import { Profile } from './Profile';
import { Remove } from './Remove';
import { Settings } from './Settings';
import { Support } from './Support';
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
  Logout,
  Settings,
  Support,
  Profile,
  Plus,
  Remove,
  Drop,
  CartNew,
  Burger,
};
