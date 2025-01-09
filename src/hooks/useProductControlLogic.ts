import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { BookById } from '@/redux/services/services.types';
import { toggleShowCartNotification } from '@/redux/slices/cartNotificationSlice';
import { addGoods, goods } from '@/redux/slices/shoppingCartSlice';
import { toggleOpenCart } from '@/redux/slices/shoppingCartUiSlice';
export const useProductControlLogic = (book: BookById) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(goods);
  const isBookInCart = cartItems.some((item) => item.id === book?.id);

  const handleAddToCart = () => {
    if (book && !isBookInCart) {
      dispatch(
        addGoods({
          id: book.id,
          price: book.price,
          authors: book.authors.map((author) => author.name),
          img: book.imageUrl,
          title: book.title,
          discount: book.discount,
          discountPrice: book.discountPrice,
        })
      );
      dispatch(toggleShowCartNotification(true));
    }
  };

  const handleOpenCart = () => {
    dispatch(toggleOpenCart(true));
  };

  return { isBookInCart, handleAddToCart, handleOpenCart };
};
