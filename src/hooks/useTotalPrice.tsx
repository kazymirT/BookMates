import { useMemo } from 'react';

import { useAppSelector } from '@/redux/hooks';
import { goods } from '@/redux/slices/shoppingCartSlice';

export const useTotalPrice = () => {
  const cartItems = useAppSelector(goods);

  const totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total +
          (item.discount
            ? Number(item.discountPrice) * item.quantity
            : Number(item.price) * item.quantity),
        0
      ),
    [cartItems]
  );

  return totalPrice;
};
