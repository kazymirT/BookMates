import { FC } from 'react';

import { UserButtonProps } from './types';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { useAppDispatch } from '@/redux/hooks';
import { toggleOpenProfile } from '@/redux/slices/profileSlice';

const UserButton: FC<UserButtonProps> = ({ firstName, lastName }) => {
  const initials = `${firstName[0]}${lastName[0]}`;

  const dispatch = useAppDispatch();

  const handleOpenProfile = () => {
    dispatch(toggleOpenProfile(true));
  };

  return (
    <Button
      size={Sizes.IconS}
      variant={Variant.User}
      type="button"
      tabIndex={0}
      onClick={handleOpenProfile}
      text={initials}
    />
  );
};

export default UserButton;
