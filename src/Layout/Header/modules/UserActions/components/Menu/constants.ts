import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    key: 'login',
    label: 'header.menu.login',
    modalType: 'login',
  },
  {
    key: 'register',
    label: 'header.menu.register',
    modalType: 'create-account',
  },
  {
    key: 'support',
    label: 'header.menu.support',
    modalType: 'feedback',
  },
];
