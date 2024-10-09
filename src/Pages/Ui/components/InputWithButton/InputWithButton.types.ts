import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  errorMessage?: string;
  requiredMessage?: boolean;
  children?: ReactNode;
}
