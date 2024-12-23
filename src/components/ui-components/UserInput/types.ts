import { ComponentPropsWithoutRef } from 'react';

export interface UserInputProps extends ComponentPropsWithoutRef<'input'> {
  errorMessage?: string;
  serverError?: boolean;
  variant: 'email' | 'phone';
  onFocus?: () => void;
}
