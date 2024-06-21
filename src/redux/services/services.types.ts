export interface Login {
  email: string;
  password: string;
}

export interface Register {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export interface UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface TokenDecode {
  email: string;
  exp: number;
  iat: number;
  id: string;
  roles: 'ROLE_PERSONAL'[] | 'ROLE_ADMIN'[];
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

export type BookById = {
  id: number;
  title: string;
  description: string;
  year: number;
  price: number;
  totalQuantity: number;
  authors: string[];
  language: string;
  categories: {
    id: number;
    name: string;
  }[];
  image: {
    id: number;
    name: string;
    contentType: string;
    bytes: string[];
  };
  expected: true;
};

export type BooksData = {
  id: number;
  title: 'string';
  year: number;
  price: number;
  totalQuantity: number;
  authors: string[];
  image: {
    id: number;
    name: string;
    contentType: string;
    bytes: string[];
  };
  expected: boolean;
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
  page?: number;
  size?: string;
  sort?: string[];
  categoryId?: string;
};

export type CategoryAll = {
  id: number;
  name: string;
};
