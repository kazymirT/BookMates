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

export enum TOPICS {
  Payment = 'Оплата і доставка',
  Assortment = 'Асортимент товарів',
  Complaints = 'Скарги і пропозиції',
  Other = 'Інше',
}
