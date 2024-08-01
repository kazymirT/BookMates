import { useState, useRef, useEffect } from 'react';

const useToggleOpen = <T extends HTMLElement>(
  initialState: boolean = false
) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);
  const listRef = useRef<T>(null);

  const handleToggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    const element = listRef.current;
    if (element) {
      if (isOpen) {
        element.style.height = `${element.scrollHeight}px`;
        element.addEventListener(
          'transitionend',
          () => {
            element.style.height = 'auto';
          },
          { once: true }
        );
      } else {
        element.style.height = `${element.scrollHeight}px`;
        requestAnimationFrame(() => {
          element.style.height = '0';
        });
      }
    }
  }, [isOpen]);

  return { isOpen, handleToggleOpen, listRef };
};

export default useToggleOpen;
