import { ReactNode } from 'react';

export interface CategoryListProps {
  children: (id: number, name: string) => ReactNode;
}
