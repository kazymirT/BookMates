import { VariantTypes } from './constants';

export interface LinkProps {
  url: string;
  variant?: VariantTypes;
  isInNewTab?: boolean;
  text: string;
}
