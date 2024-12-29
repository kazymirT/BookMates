export enum ACCOUNT_PAGE {
  Orders = 'orders',
  Settings = 'settings',
}

export const MENU_LINKS = [
  { id: 1, name: 'info', link: '/user' },
  { id: 2, name: 'orders', link: '/user/orders' },
  { id: 3, name: 'settings', link: '/user/settings' },
];

export const FACE_USER = {
  firstName: 'Валерія',
  lastName: 'Мельник',
  dataOfBorn: '06.08.1999',
  gender: 'Жіноча',
  email: 'valeris@gmail.com',
  phone: '+380 00 000 00 00',
};

export const FACE_ORDERS = [
  {
    id: 1,
    name: 'Матильда (Matylda)',
    count: '1',
    price: '400',
    status: 'Доставлено',
  },
  {
    id: 2,
    name: 'Банзай (Banzai. Japonia dla dociekliwych)',
    count: '1',
    price: '400',
    status: 'Доставлено',
  },
  {
    id: 3,
    name: 'Великий польсько-український, українсько-польський словник. Термінологія сучасного бізнесу. 200 000 слів',
    count: '1',
    price: '400',
    status: 'Відхилено',
  },
];
