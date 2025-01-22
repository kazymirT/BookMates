import { ReactNode } from 'react';

export interface CategoryItemProps {
  id: number;
  name: string;
  onClose: () => void;
}

export interface CategoryAllProps {
  children: (id: number, name: string) => ReactNode;
}
