import { ProductCardProps } from '../ProductCard/types';

export interface SkeletonProductCardProps
  extends Pick<ProductCardProps, 'variant'> {
  cards?: number;
}
