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

export const categories = [
  {
    id: 1,
    name: 'Хіти продажів',
    path: 'bestseller',
  },
  {
    id: 2,
    name: 'Вигідні пропозиції',
    path: 'best-deals',
  },
  {
    id: 3,
    name: 'Книги іноземними мовами',
    path: 'foreign-language-books',
  },
  {
    id: 4,
    name: 'Вивчення мов',
    path: 'language-learning',
  },
  {
    id: 5,
    name: 'Фантастика, фентезі',
    path: 'science-fiction-fantasy',
  },
  {
    id: 6,
    name: 'Психологія і взаємини',
    path: 'psychology-relationships',
  },
  {
    id: 7,
    name: 'Саморозвиток',
    path: 'self-development',
  },
  {
    id: 8,
    name: 'Бізнес, гроші, економіка',
    path: 'business-money-economy',
  },
  {
    id: 9,
    name: 'Дитяча література',
    path: 'childrens-literature',
  },
  {
    id: 10,
    name: 'Біографія і мемуари',
    path: 'biography-memoirs',
  },
  {
    id: 11,
    name: 'Хоббі і дозвілля',
    path: 'hobbies-leisure',
  },
  {
    id: 12,
    name: 'Художня література',
    path: 'fiction-literature',
  },
];
