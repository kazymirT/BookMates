import { useState, useRef, useEffect } from 'react';

const useToggleOpen = <T extends HTMLElement>(
  initialState: boolean = false
) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const listRef = useRef<T>(null);

  const handleToggleOpen = () => {
    if (!isAnimating) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const element = listRef.current;
    if (element) {
      setIsAnimating(true);
      if (isOpen) {
        element.style.height = `${element.scrollHeight}px`;
        element.addEventListener(
          'transitionend',
          () => {
            element.style.height = 'auto';
            setIsAnimating(false);
          },
          { once: true }
        );
      } else {
        element.style.height = `${element.scrollHeight}px`;
        requestAnimationFrame(() => {
          element.style.height = '0';
          setIsAnimating(false);
        });
      }
    }
  }, [isOpen]);

  return { isOpen, handleToggleOpen, listRef };
};

export default useToggleOpen;
