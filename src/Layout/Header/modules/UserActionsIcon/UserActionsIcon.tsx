import BurgerActions from './components/BurgerAction/BurgerAction';
import styles from './UserActionsIcon.module.scss';
import CartButton from '../HeaderStickyBar/components/CartButton/CartButton';
import UserActions from '../UserActions/UserActions';
import useResponsive from '@/hooks/useResponsive';

const UserActionsIcon = () => {
  const screen = useResponsive();
  return (
    <div className={styles.icons}>
      <UserActions />
      <CartButton />
      {screen === 'mobile' && <BurgerActions />}
    </div>
  );
};

export default UserActionsIcon;
