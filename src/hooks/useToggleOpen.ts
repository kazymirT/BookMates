import { useEffect, useRef, useState } from 'react';

export const useToggleOpen = <T extends HTMLElement>({
  initialState = false,
  initialHeight,
}: {
  initialState?: boolean;
  initialHeight?: number;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);
  const contentRef = useRef<T>(null);
  const handleToggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${initialHeight ? initialHeight : contentRef.current.scrollHeight}px`
        : '0px';
    }
  }, [initialHeight, isOpen]);
  return { isOpen, handleToggleOpen, contentRef };
};
