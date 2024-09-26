export interface PriceProps {
  discountPrice?: number;
  normalPrice: number;
  variant: 'bookCard' | 'search' | 'product' | 'cart' | 'order';
}
