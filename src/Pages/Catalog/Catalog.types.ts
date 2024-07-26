import { CategoryAll } from '@/redux/services/services.types';

export type CatalogNavigate = {
  sort: string;
  page: number;
  url: URL;
  categoryId: string;
};

export type CatalogHeaderProps = {
  handleChangeSort: (newSort: string) => void;
  sortProduct: string;
};

export type FilterProps = {
  title: string;
  categories?: CategoryAll[];
  onFilterChange: () => void;
  isScroll?: boolean;
  price?: {
    min: number;
    max: number;
  };
};

export type ProductType = {
  page: number;
  categoryId: string;
  sortProduct: string;
};
