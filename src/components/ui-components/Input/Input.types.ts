import { ComponentPropsWithoutRef } from 'react';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  errorMessage?: string;
  serverError?: boolean;
  noValidate?: boolean;
  requiredMessage?: boolean;
  onFocus?: () => void;
}
