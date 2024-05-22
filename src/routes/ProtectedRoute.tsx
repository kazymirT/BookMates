import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@/redux/hooks';
import { userData } from '@/redux/slices/userSlice';
import { ROUTE_PATH } from '@/utils/constants';

type Props = {
  children: React.ReactNode;
  adminAccess?: boolean;
};

const ProtectedRoute = ({ children, adminAccess = false }: Props) => {
  const user = useAppSelector(userData);
  const isAdmin = user?.user?.role === 'ROLE_ADMIN';

  return (
    <>
      {!user ? (
        <Navigate to={ROUTE_PATH.NOTAUTHENTICATED} replace />
      ) : !adminAccess ? (
        children
      ) : isAdmin ? (
        children
      ) : (
        <Navigate to={ROUTE_PATH.NOTAUTHORIZED} replace />
      )}
    </>
  );
};

export default ProtectedRoute;
