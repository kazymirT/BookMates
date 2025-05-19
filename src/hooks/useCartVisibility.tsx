import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { isOpen, toggleOpenCart } from '@/redux/slices/shoppingCartUiSlice';

export const useCartVisibility = () => {
  const isCartOpen = useAppSelector(isOpen);
  const dispatch = useAppDispatch();

  const closeCart = () => dispatch(toggleOpenCart(false));

  return { isCartOpen, closeCart };
};
