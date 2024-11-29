import { type ReactNode } from 'react';

export type DropdownProps = {
  options: (toggleOpen: () => void, isOpen: boolean) => ReactNode;
  control: (toggleOpen: () => void, isOpen: boolean) => ReactNode;
  variant: 'menu' | 'category' | 'filter';
  isOverflow?: boolean;
};
