const useFlyToCart = () => {
  const cartRef = document.querySelector('#cart-informer');
  const flyToCart = (imgRef: HTMLImageElement) => {
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

    const animation = imgClone.animate(
      [
        {
          transform: `translate(0px, 0px) scale(1)`,
          opacity: 1,
        },
        {
          transform: `translate(${cartEndX - imgStartX - 75}px, ${
            cartEndY - imgStartY - 100
          }px) scale(0.2)`,
          opacity: 0.7,
        },
      ],
      {
        duration: 800,
        easing: 'ease-in-out',
        fill: 'forwards',
      }
    );

    animation.onfinish = () => {
      document.body.removeChild(imgClone);
    };
  };

  return { flyToCart };
};

export default useFlyToCart;
