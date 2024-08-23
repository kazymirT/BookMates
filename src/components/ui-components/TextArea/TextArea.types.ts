import { ComponentPropsWithoutRef } from 'react';

export interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
  errorMessage?: string;
}
