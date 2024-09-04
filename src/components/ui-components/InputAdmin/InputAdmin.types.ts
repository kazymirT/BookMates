import { ComponentPropsWithoutRef } from 'react';

export interface InputAdminProps extends ComponentPropsWithoutRef<'input'> {
  errorMessage?: string;
}
