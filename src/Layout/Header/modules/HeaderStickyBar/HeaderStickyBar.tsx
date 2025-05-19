import styles from './HeaderStickyBar.module.scss';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown';
import Search from '../Search/Search';
import UserActionsIcon from '../UserActionsIcon/UserActionsIcon';
import useResponsive from '@/hooks/useResponsive';

const HeaderStickyBar = () => {
  const screen = useResponsive();
  return (
    <div className={styles.bottom}>
      {screen !== 'mobile' && (
        <div className={styles.wrapper}>
          <CategoryDropdown />
          {screen === 'desktop' && <Search />}
        </div>
      )}
      {screen === 'mobile' && <Search />}
      {screen !== 'mobile' && <UserActionsIcon />}
    </div>
  );
};

export default HeaderStickyBar;
