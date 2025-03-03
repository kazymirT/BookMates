import UserButton from './components/UserButton/UserButton';
import UserMenu from './components/UserMenu/UserMenu';
import { useAppSelector } from '@/redux/hooks';
import { userData } from '@/redux/slices/userSlice';

const UserActions = () => {
  const { user } = useAppSelector(userData);

  return user && user.id ? <UserButton {...user} /> : <UserMenu />;
};

export default UserActions;
