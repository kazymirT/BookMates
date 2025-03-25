export interface Login {
  email: string;
  password: string;
  newDeviceCode?: string;
}

export interface ErrorResponse {
  error: {
    data: {
      message: string;
      error: string;
      statusCode: number;
    };
    status: number;
  };
}

export interface Register {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface CartItem {
  cartItemId: number;
  bookId: number;
  quantity: number;
  price: number;
}
export interface CartResponse {
  userId: number;
  cartHeaderId: number;
  totalPrice: number;
  cartItems: CartItem[];
}

export interface AddBook {
  bookId: number;
  quantity: number;
}

export interface RegisterResponse {
  email: string;
  name: string;
  image: null | string;
  id: number;
  role: 'user' | 'admin';
  isLoggedIn: boolean;
  isVerifyEmail: boolean;
}

export interface VerifyEmailResponse {
  accessToken: string;
}
export interface LoginResponse {
  loggedInUser: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: 'user' | 'admin';
    image: null | string;
    isLoggedIn: boolean;
    isVerifyEmail: boolean;
  };
  accessToken: string;
}

export interface UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface TokenDecode {
  email: string;
  role: 'user' | 'admin';
  sub: number;
  sessionId: number;
  deviceId: string;
  iat: number;
  exp: number;
}

export interface Error {
  status: number;
  originalStatus: number;
  data: string;
  error: string;
}

export interface ResponseError {
  error: Error;
  isUnhandledError: boolean;
}

export type BookByIdResponse = {
  id: number;
  title: string;
  description: string;
  year: number;
  price: number;
  totalQuantity: number;
  languages: Attributes[];
  authors: Attributes[];
  categories: Attributes[];
  imageUrl: string;
  expected: true;
  discount: number;
  discountPrice: number;
};

export type BookById = {
  id: number;
  title: string;
  description: string;
  year: Attributes[];
  price: number;
  totalQuantity: number;
  languages: Attributes[];
  authors: Attributes[];
  categories: Attributes[];
  imageUrl: string;
  expected: true;
  discount: number;
  discountPrice: number;
};

export type BooksListResponse = {
  totalPages: number;
  totalElements: number;
  size: number;
  content: BooksData[];
  number: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  numberOfElements: number;
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
    };
    paged: boolean;
    unpaged: boolean;
    pageNumber: number;
    pageSize: number;
  };
  first: boolean;
  last: boolean;
  empty: boolean;
};

export type BooksArgs = {
  page?: string;
  size?: string;
  sort?: string[];
  search?: string;
  price?: string[];
  years?: string[];
  language?: string[];
  categories?: string[];
  authors?: string[];
};

export type CategoryAll = {
  id: number;
  name: string;
};

export interface AddBook {
  photo: string;
  title: string;
  categoryNames: string[];
  authorNames: string[];
  description: string;
  year: string;
  languageNames: string[];
  price: string;
  totalQuantity: string;
  discount: string;
  expected: boolean;
}

export interface ChangeImage {
  id: number;
  body: FormData;
}

export interface Attributes {
  id: number;
  name: string;
}

export interface AllAttributesResponse {
  languages: Attributes[];
  authors: Attributes[];
  categories: Attributes[];
  years: number[];
}
export interface AllAttributes {
  languages: Attributes[];
  authors: Attributes[];
  categories: Attributes[];
  years: Attributes[];
}

// new api types

export type BooksData = {
  id: number;
  title: string;
  year: number;
  price: number;
  totalQuantity: number;
  authors: string[];
  imageUrl: string;
  expected: boolean;
  discount: number;
  discountPrice: number;
};
export interface BooksMainPage {
  news: Book[];
  sale: Book[];
}

export interface BookByIdNew {
  id: number;
  image: string;
  title: string;
  author: string;
  published: string;
  cover: string;
  pages: number;
  price: number;
  languages: string[];
  description: string;
  inStock: number;
  discount: number;
  isNew: boolean;
  categories: string[];
  discountPrice: number;
}
export interface Book {
  id: number;
  title: string;
  image: string;
  author: string;
  price: number;
  discount: number | null;
  discountPrice?: number;
  isNew?: boolean;
}
export interface BooksResponse {
  data: Book[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface BooksArgsNew {
  lang: 'ua' | 'en';
  years?: string[];
  languages?: string[];
  minPrice?: string;
  maxPrice?: string;
  sortPrice?: 'DESC' | 'ASC';
  isNew?: boolean;
  alphabetical?: boolean;
  limit?: string;
  page?: string;
}
