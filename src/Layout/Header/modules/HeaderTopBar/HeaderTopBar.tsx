import { Link } from 'react-router-dom';

import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import Navigation from './components/Navigation/Navigation';
import styles from './HeaderTopBar.module.scss';
import Search from '../Search/Search';
import UserActionsIcon from '../UserActionsIcon/UserActionsIcon';
import logo from '@/assets/icons/BookMates.svg';
import useResponsive from '@/hooks/useResponsive';

const HeaderTopBar = () => {
  const screen = useResponsive();
  return (
    <div className={styles.top}>
      <Link to="/" className={styles.logo}>
        <img
          src={logo}
          alt="icon logo"
          width={217}
          height={48}
          loading="lazy"
        />
      </Link>
      {screen === 'mobile' && <UserActionsIcon />}
      {screen === 'tablet' && <Search />}
      {screen === 'desktop' && <Navigation />}
      {screen !== 'mobile' && <LanguageSwitcher />}
    </div>
  );
};

export default HeaderTopBar;
