import { Button } from '@/components/ui-components/Button/Button';
import {
  Position,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch } from '@/redux/hooks';
import { toggleShowBurgerMenu } from '@/redux/slices/burgerMenuSlice';

const BurgerActions = () => {
  const dispatch = useAppDispatch();
  const toggleOpen = () => dispatch(toggleShowBurgerMenu(true));
  return (
    <Button
      type="button"
      size={Sizes.IconS}
      variant={Variant.Icon}
      icon={<Icon.Burger height="24px" width="32px" />}
      onClick={toggleOpen}
      tabIndex={0}
      iconPosition={Position.Left}
    />
  );
};

export default BurgerActions;
