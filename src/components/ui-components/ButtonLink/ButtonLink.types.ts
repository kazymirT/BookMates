import { type ButtonProps } from '../Button/Button.types';

export interface ButtonLinkProps extends ButtonProps {
  url: string;
  testId?: string;
}
