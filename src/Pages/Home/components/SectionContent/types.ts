import type { ReactNode } from 'react';

export interface SectionContentProps {
  children: ReactNode;
  variant: 'authors' | 'category' | 'product' | 'test';
}
