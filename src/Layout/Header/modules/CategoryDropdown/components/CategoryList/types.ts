import { ReactNode } from 'react';

import { MetaAttributes } from '@/redux/services/meta';

export interface CategoryListProps {
  children: (category: MetaAttributes) => ReactNode;
}
