import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import useClickOutside from '@/hooks/useClickOutside';
import { useAppDispatch } from '@/redux/hooks';
import { incrementOverlay, decrementOverlay } from '@/redux/slices/overlay';
import { setSearch } from '@/redux/slices/queryParams';

export const useSearch = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    isOpen ? dispatch(incrementOverlay()) : dispatch(decrementOverlay());
  }, [dispatch, isOpen]);

  useEffect(() => {
    value.length > 2 && isFocus ? setIsOpen(true) : setIsOpen(false);
  }, [isFocus, value.length]);

  const clearValue = () => setValue('');
  const setIsFocusTrue = () => setIsFocus(true);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleOnSearch = () => {
    dispatch(setSearch(value));
    navigate(`/catalog/?search=${value}`);
    handleOnClose();
    clearValue();
  };

  const handleOnClose = () => {
    setIsFocus(false);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.length > 2) {
      handleOnSearch();
      e.currentTarget.blur();
    }
  };

  useClickOutside(wrapperRef, handleOnClose);

  return {
    t,
    value,
    isOpen,
    handleOnChange,
    handleOnSearch,
    handleKeyDown,
    clearValue,
    handleOnClose,
    setIsFocusTrue,
    wrapperRef,
  };
};
