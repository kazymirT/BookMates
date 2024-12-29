import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '@/redux/hooks';
import { userData } from '@/redux/slices/userSlice';

const PrivateRoutes = () => {
  const { user } = useAppSelector(userData);
  return user?.role === 'ROLE_PERSONAL' ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoutes;
