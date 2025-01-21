import { Link } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import styles from './HeaderTopBar.module.scss';
import logo from '@/assets/icons/BookMates.svg';
import { RadioGroup } from '@/components/RadioGroup/RadioGroup';

const HeaderTopBar = () => {
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
      <Navigation />
      <RadioGroup />
    </div>
  );
};

export default HeaderTopBar;
