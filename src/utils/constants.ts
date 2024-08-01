export const ROUTE_PATH: Record<string, string> = {
  HOME: '/',
  CATALOG: '/catalog',
  PAGE404: '*',
  NOTAUTHENTICATED: '/not-authenticated',
  NOTAUTHORIZED: '/not-authorized',
};

export const PAGES = ['HOME', 'CATALOG'];

export const notStorePages = [
  ROUTE_PATH.NOTAUTHENTICATED,
  ROUTE_PATH.NOTAUTHORIZED,
];

export const BASE_CRUMBS: Record<
  string,
  {
    name: string;
    to: string;
  }
> = {
  catalog: {
    name: 'Каталог',
    to: '/catalog',
  },
  order: {
    name: 'Оформити замовлення',
    to: '/order',
  },
};

export enum TOPICS {
  Payment = 'Оплата і доставка',
  Assortment = 'Асортимент товарів',
  Complaints = 'Скарги і пропозиції',
  Other = 'Інше',
}

export const selectSortOptions = [
  'За популярністю',
  'Спочатку дешеві',
  'Спочатку дорогі',
  'Спочатку нові',
  'За назвою',
];

export const SORT_OPTIONS: Record<string, string> = {
  'За популярністю': 'id,desc',
  'Спочатку дешеві': 'price,asc',
  'Спочатку дорогі': 'price,desc',
  'Спочатку нові': 'createdAt,asc',
  'За назвою': 'title,asc',
};
