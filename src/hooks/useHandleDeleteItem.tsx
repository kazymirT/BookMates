import { useNavigate, useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { removePosition } from '@/redux/slices/shoppingCartSlice';
import { goods } from '@/redux/slices/shoppingCartSlice';

export const useHandleDeleteItem = (closeCart: () => void) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = useAppSelector(goods);

  const handleDeleteItem = (id: number) => {
    dispatch(removePosition(id));
    if (cartItems.length === 1) {
      closeCart();
      if (location.pathname === '/order') {
        navigate('/catalog');
      }
    }
  };

  return handleDeleteItem;
};
