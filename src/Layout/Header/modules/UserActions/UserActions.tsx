import { skipToken } from '@reduxjs/toolkit/query/react';

import UserButton from './components/UserButton/UserButton';
import UserMenu from './components/UserMenu/UserMenu';
import { useAppSelector } from '@/redux/hooks';
import { useGetUserQuery } from '@/redux/services/user';
import { userId } from '@/redux/slices/userSlice';

const UserActions = () => {
  const id = useAppSelector(userId);

  const { data: user } = useGetUserQuery(id ?? skipToken);

  return user && id ? <UserButton {...user} /> : <UserMenu />;
};

export default UserActions;
