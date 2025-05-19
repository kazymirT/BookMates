import { MetaAttributes } from '@/redux/services/meta';

export interface CategoryItemProps {
  category: MetaAttributes;
  onClose: () => void;
}
