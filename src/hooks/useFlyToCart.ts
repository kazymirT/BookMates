import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/redux/hooks';
import { goods, toggleFlyCart } from '@/redux/slices/shoppingCartSlice';

const useFlyToCart = () => {
  const items = useAppSelector(goods);
  const dispatch = useDispatch();
  const cartRef = document.querySelector('#cart-informer');

  const flyToCart = (imgRef: HTMLImageElement) => {
    dispatch(toggleFlyCart(true));
    if (!cartRef || !imgRef) return;

    const imgClone = imgRef.cloneNode(true) as HTMLImageElement;
    imgClone.style.position = 'absolute';
    imgClone.style.zIndex = '1000';
    imgClone.style.width = `${imgRef.offsetWidth}px`;
    imgClone.style.height = `${imgRef.offsetHeight}px`;
    document.body.appendChild(imgClone);

    const imgRect = imgRef.getBoundingClientRect();
    const cartRect = cartRef.getBoundingClientRect();

    const imgStartX = imgRect.left + window.scrollX;
    const imgStartY = imgRect.top + window.scrollY;
    const cartEndX = cartRect.left + window.scrollX;
    const cartEndY = cartRect.top + window.scrollY;

    imgClone.style.left = `${imgStartX}px`;
    imgClone.style.top = `${imgStartY}px`;
    const translateX = items.length
      ? cartEndX - imgStartX - 70
      : cartEndX - imgStartX - 195;
    const translateY = cartEndY - imgStartY - 105;
    const animation = imgClone.animate(
      [
        {
          transform: `translate(0px, 0px) scale(1)`,
          opacity: 1,
        },
        {
          transform: `translate(${translateX}px, ${translateY}px) scale(0.23)`,
          opacity: 0.7,
        },
      ],
      {
        delay: items.length ? 0 : 150,
        duration: 900,
        easing: 'cubic-bezier(0.4, 0.5, 0.7, 1)',
        fill: 'forwards',
      }
    );

    animation.onfinish = () => {
      document.body.removeChild(imgClone);
      dispatch(toggleFlyCart(false));
    };
  };
  return { flyToCart };
};

export default useFlyToCart;
