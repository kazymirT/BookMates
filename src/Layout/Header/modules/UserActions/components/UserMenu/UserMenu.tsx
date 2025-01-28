import { lazy } from 'react';
import { Suspense } from 'react';

import { Button } from '@/components/ui-components/Button/Button';
import {
  Position,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import DropDown from '@/components/ui-components/Dropdown/DropDown';
import { Icon } from '@/components/ui-components/Icons';

const MenuLazy = lazy(() => import('../Menu/Menu'));

const UserMenu = () => {
  return (
    <DropDown
      options={(toggleOpen) => (
        <Suspense>
          <MenuLazy onClose={toggleOpen} />
        </Suspense>
      )}
      control={(toggleOpen) => (
        <Button
          type="button"
          size={Sizes.IconS}
          variant={Variant.Icon}
          icon={<Icon.Account height="28px" width="28px" />}
          onClick={toggleOpen}
          tabIndex={0}
          iconPosition={Position.Left}
        />
      )}
      variant="menu"
      isOverflow
    />
  );
};

export default UserMenu;
