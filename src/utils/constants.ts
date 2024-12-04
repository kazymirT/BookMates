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
  колекція: {
    name: 'Всі колекції',
    to: '/collections',
  },
  collections: {
    name: 'Book Collections',
    to: '/collections',
  },
  authors: {
    name: 'Authors',
    to: '/authors',
  },
  автори: {
    name: 'Всі автори',
    to: '/authors',
  },
  catalog: {
    name: 'Catalog',
    to: '/catalog',
  },
  'make an order': {
    name: 'Make an order',
    to: '/order',
  },
  каталог: {
    name: 'Каталог',
    to: '/catalog',
  },
  delivery: {
    name: 'Delivery',
    to: '/delivery',
  },
  доставка: {
    name: 'Доставка і оплата',
    to: '/delivery',
  },
  'Оформити замовлення': {
    name: 'Оформити замовлення',
    to: '/order',
  },
};

export enum TOPICS {
  Payment = 'Payment and delivery',
  Assortment = 'Assortment of goods',
  Complaints = 'Complaints and suggestions',
  Other = 'Other',
}
export enum TOPICS_URK {
  Payment = 'Оплата і доставка',
  Assortment = 'Асортимент товарів',
  Complaints = 'Скарги і пропозиції',
  Other = 'Інше',
}
export enum TOPICS_VALIDATE {
  PaymentUa = 'Оплата і доставка',
  AssortmentUa = 'Асортимент товарів',
  ComplaintsUA = 'Скарги і пропозиції',
  OtherUa = 'Інше',
  Payment = 'Payment and delivery',
  Assortment = 'Assortment of goods',
  Complaints = 'Complaints and suggestions',
  Other = 'Other',
}
export const TOPIC_WITH_LANGUAGES: Record<
  string,
  typeof TOPICS | typeof TOPICS_URK
> = {
  en: TOPICS,
  ua: TOPICS_URK,
};

export enum ORDER_STATUS {
  Pending = 'Очікує',
  Confirmed = 'Підтверджено',
  Processing = 'Обробляється',
  Shipped = 'Відправлено',
  Delivered = 'Доставлено',
  Completed = 'Завершено',
  Cancelled = 'Скасовано',
  Returned = 'Повернено',
}

export const SORT_OPTIONS_UA = [
  'За популярністю',
  'Дешевші',
  'Дорожчі',
  'Новинки',
  'За назвою',
];
export const SORT_OPTIONS_EN = [
  'By Rating',
  'Price Low to High',
  'Price High to Low',
  'Newest First',
  'By name A-Z',
];

export const selectSortOptions: Record<string, string[]> = {
  ua: SORT_OPTIONS_UA,
  en: SORT_OPTIONS_EN,
};

export const SORT_OPTIONS: Record<string, string> = {
  'За популярністю': 'id,asc',
  Дешевші: 'price,asc',
  Дорожчі: 'price,desc',
  Новинки: 'id,desc',
  'За назвою': 'title,asc',
  'By Rating': 'id,asc',
  'Price Low to High': 'price,asc',
  'Price High to Low': 'price,desc',
  'Newest First': 'id,desc',
  'By name A-Z': 'title,asc',
};
export const SORT_OPTIONS_STATE: Record<string, string> = {
  'За популярністю': 'id-asc',
  Дешевші: 'price-asc',
  Дорожчі: 'price-desc',
  Новинки: 'id-desc',
  'За назвою': 'title-asc',
  'By Rating': 'id-asc',
  'Price Low to High': 'price-asc',
  'Price High to Low': 'price-desc',
  'Newest First': 'id-desc',
  'By name A-Z': 'title-asc',
};
export const SORT_OPTIONS_URL_UA: Record<string, string> = {
  'id-asc': 'За популярністю',
  'price-asc': 'Дешевші',
  'price-desc': 'Дорожчі',
  'id-desc': 'Новинки',
  'title-asc': 'За назвою',
};
export const SORT_OPTIONS_URL_EN: Record<string, string> = {
  'id-asc': 'By Rating',
  'price-asc': 'Price Low to High',
  'price-desc': 'Price High to Low',
  'id-desc': 'Newest First',
  'title-asc': 'By name A-Z',
};
export const SORT_OPTIONS_URL: Record<string, Record<string, string>> = {
  ua: SORT_OPTIONS_URL_UA,
  en: SORT_OPTIONS_URL_EN,
};

export const ADMIN_LIST = [
  { id: 1, name: 'Введення книжок', url: '/admin/books' },
  { id: 2, name: 'Введення категорій', url: '/admin/categories' },
  { id: 6, name: 'Введення авторів', url: '/admin/authors' },
  { id: 7, name: 'Введення мов', url: '/admin/language' },
  { id: 3, name: 'Клієнти зареєстровані', url: '/admin/client' },
  { id: 4, name: 'Клієнти не зареєстровані', url: '/admin/clientN' },
  { id: 5, name: 'Замовлення', url: '/admin/order' },
];

export const Attributes: Record<string, { inputName: string; title: string }> =
  {
    category: {
      inputName: 'Назва категорії',
      title: 'категорію',
    },
    language: {
      inputName: 'Назва мови',
      title: 'мову',
    },
    authors: {
      inputName: 'Назва автора',
      title: 'автора',
    },
  };
