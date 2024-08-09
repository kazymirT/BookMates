import { LinkVariantTypes } from './constants';

export interface LinkProps {
  url: string;
  variant?: LinkVariantTypes;
  isInNewTab?: boolean;
  text: string;
}
