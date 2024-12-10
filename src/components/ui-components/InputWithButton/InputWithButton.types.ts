import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface InputWithButtonProps
  extends ComponentPropsWithoutRef<'input'> {
  errorMessage?: string;
  requiredMessage?: boolean;
  variant: 'search' | 'email';
  children?: ReactNode;
}
