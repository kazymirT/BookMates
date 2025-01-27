import CartButton from './components/CartButton/CartButton';
import styles from './HeaderStickyBar.module.scss';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown';
import Search from '../Search/Search';
import UserActions from '../UserActions/UserActions';

const HeaderStickyBar = () => {
  return (
    <div className={styles.bottom}>
      <div className={styles.wrapper}>
        <CategoryDropdown />
        <Search />
      </div>
      <div className={styles.icons}>
        <UserActions />
        <CartButton />
      </div>
    </div>
  );
};

export default HeaderStickyBar;
