import React from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch } from '@/redux/hooks';
import { push } from '@/redux/slices/locationHistorySlice';

const HistoryWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(push(location.pathname));
  }, [location, dispatch]);

  return <>{children}</>;
};

export default HistoryWrapper;
