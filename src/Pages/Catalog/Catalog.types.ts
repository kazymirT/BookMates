import { FilterType } from '@/redux/slices/queryParams';

export type FilterProps = {
  title: string;
  categories: { id: number; name: string; checked: boolean }[];
  isScroll?: boolean;
  isDefaultOpen?: boolean;
  filterType: keyof FilterType;
};

export type PriceFilterProps = {
  title: string;
  isDefaultOpen?: boolean;
  price: number[];
};
