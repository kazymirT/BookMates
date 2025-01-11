import { ProductCardProps } from '../ProductCard/types';

export interface SkeletonProductCardProps
  extends Pick<ProductCardProps, 'variant'> {
  cards?: number;
}

export interface SkeletonAuthorCardProps {
  cards: number;
}

export interface SkeletonCollectionCardProps {
  cards: number;
}
