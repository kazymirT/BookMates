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
