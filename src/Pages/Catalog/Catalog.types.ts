import { FilterType } from '@/redux/slices/queryParams';

export type FilterProps = {
  title: string;
  categories: { id: number; name: string; checked: boolean }[];
  filterType: keyof FilterType;
};

export type PriceFilterProps = {
  onClose: () => void;
  price: number[];
};
