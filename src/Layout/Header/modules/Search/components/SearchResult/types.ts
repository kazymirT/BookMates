import { TFunction } from 'i18next';

export interface SearchResultProps {
  isOpen: boolean;
  value: string;
  onClickSearch: () => void;
  t: TFunction<'translation', undefined>;
}
