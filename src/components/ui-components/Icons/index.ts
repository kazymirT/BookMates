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
  [IconAppName.ARROW]: makeIcon(IconInstance.Arrow, {
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
  }),
  [IconAppName.ARROW_1]: makeIcon(IconInstance.Arrow_1, {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
  }),
  [IconAppName.ACCOUNT]: makeIcon(IconInstance.Account, {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
  }),
  [IconAppName.EDIT]: makeIcon(IconInstance.Edit, {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
  }),
  [IconAppName.CLOSE]: makeIcon(IconInstance.Close, {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
  }),
  [IconAppName.SETTINGS]: makeIcon(IconInstance.Settings, {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
  }),
  [IconAppName.SUPPORT]: makeIcon(IconInstance.Support, {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
  }),
  [IconAppName.LOGOUT]: makeIcon(IconInstance.Logout, {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
  }),
  [IconAppName.PROFILE]: makeIcon(IconInstance.Profile, {
    width: '40',
    height: '40',
    viewBox: '0 0 40 40',
  }),
  [IconAppName.PLUS]: makeIcon(IconInstance.Plus, {
    width: '25',
    height: '24',
    viewBox: '0 0 25 24',
  }),
  [IconAppName.REMOVE]: makeIcon(IconInstance.Remove, {
    width: '19',
    height: '18',
    viewBox: '0 0 19 18',
  }),
  [IconAppName.DROP]: makeIcon(IconInstance.Drop, {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
  }),
  [IconAppName.CARTNEW]: makeIcon(IconInstance.CartNew, {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
  }),
  [IconAppName.BURGER]: makeIcon(IconInstance.Burger, {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
  }),
};
