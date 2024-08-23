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
  'Дешевші',
  'Дорожчі',
  'Новинки',
  'За назвою',
];

export const SORT_OPTIONS: Record<string, string> = {
  'За популярністю': 'id,asc',
  Дешевші: 'price,asc',
  Дорожчі: 'price,desc',
  Новинки: 'id,desc',
  'За назвою': 'title,asc',
};

export const SORT_OPTIONS_URL: Record<string, string> = {
  'За популярністю': 'rank-desc',
  Дешевші: 'final_price-asc',
  Дорожчі: 'final_price-desc',
  Новинки: 'published_at-desc',
  'За назвою': 'title-asc',
  'rank-desc': 'За популярністю',
  'final_price-asc': 'Дешевші',
  'final_price-desc': 'Дорожчі',
  'published_at-desc': 'Новинки',
  'title-asc': 'За назвою',
  Українська: 'Ukrainskij',
  Англійська: 'Anglijskij',
  Польська: 'Polski',
  Іспанська: 'Ispanskij',
  українська: 'Ukrainskij',
  англійська: 'Anglijskij',
  польська: 'Polski',
  іспанська: 'Ispanskij',
  Ispanskij: 'Іспанська',
  Polski: 'Польська',
  Anglijskij: 'Англійська',
  Ukrainskij: 'Українська',
  'Хіти продажів': 'bestsellers',
  'Вигідні пропозиції': 'great-deals',
  'Книги іноземною мовою': 'books-in-foreign-languages',
  'Вивчення мов': 'language-learning',
  'Фантастика, фентезі': 'fantasy',
  Фантастика: 'fantasy',
  Фентезі: 'fantasy',
  'Психологія і взаємини': 'psychology-relationships',
  Саморозвиток: 'self-development',
  'Бізнес, гроші, економіка': 'business-money-economics',
  Економіка: 'business-money-economics',
  Бізнес: 'business-money-economics',
  Гроші: 'business-money-economics',
  'Дитяча література': "children's-books",
  'Біографії і мемуари': 'biographies-memoirs',
  'Хоббі і дозвілля': 'hobbies',
  'Художня література': 'fiction',
  fiction: 'Художня література',
  hobbies: 'Хоббі і дозвілля',
  'biographies-memoirs': 'Біографії і мемуари',
  "children's-books": 'Дитяча література',
  'business-money-economics': 'Бізнес, гроші, економіка',
  'self-development': 'Саморозвиток',
  'psychology-relationships': 'Психологія і взаємини',
  fantasy: 'Фантастика, фентезі',
  'language-learning': 'Вивчення мов',
  'books-in-foreign-languages': 'Книги іноземною мовою',
  'great-deals': 'Вигідні пропозиції',
  bestsellers: 'Хіти продажів',
};

export const ADMIN_LIST = [
  { id: 1, name: 'Введення книжок', url: '/admin/books' },
  { id: 2, name: 'Введення категорій', url: '/admin/categories' },
  { id: 3, name: 'Клієнти зареєстровані', url: '/admin/client' },
  { id: 4, name: 'Клієнти не зареєстровані', url: '/admin/clientN' },
  { id: 5, name: 'Замовлення', url: '/admin/order' },
];
