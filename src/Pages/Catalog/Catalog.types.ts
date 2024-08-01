import { CategoryAll } from '@/redux/services/services.types';
import { FilterType } from '@/redux/slices/queryParams';

export type CatalogNavigate = {
  sort: string;
  page: number;
  url: URL;
  categoryId: string;
};

export type FilterProps = {
  title: string;
  categories?: CategoryAll[];
  isScroll?: boolean;
  isDefaultOpen?: boolean;
  price?: {
    min: number;
    max: number;
  };
  filterType: keyof FilterType;
};

export type ProductType = {
  page: number;
  categoryId: string;
  sortProduct: string;
};
