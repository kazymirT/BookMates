import { useEffect, useRef, useState } from 'react';

export const useToggleOpen = <T extends HTMLElement>(
  initialState: boolean = false
) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);
  const contentRef = useRef<T>(null);
  const handleToggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : '0px';
    }
  }, [isOpen]);
  return { isOpen, handleToggleOpen, contentRef };
};
