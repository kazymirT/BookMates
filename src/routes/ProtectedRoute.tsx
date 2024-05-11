import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from '@/redux/hooks';
import { userData } from '@/redux/slices/userSlice';

type Props = {
  children: React.ReactNode;
  adminAccess?: boolean;
};

const ProtectedRoute = ({ children, adminAccess = false }: Props) => {
  const location = useLocation();
  const user = useAppSelector(userData);
  const isAdmin = user?.role === 'admin';

  return (
    <>
      {!user ? (
        <Navigate to={'/404'} replace state={{ from: location }} />
      ) : !adminAccess ? (
        children
      ) : isAdmin ? (
        children
      ) : (
        <Navigate to={'/404'} replace state={{ from: location }} />
      )}
    </>
  );
};

export default ProtectedRoute;
