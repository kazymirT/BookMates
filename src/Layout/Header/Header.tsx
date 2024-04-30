import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';
import { PAGES, ROUTE_PATH } from '../../utils/constants';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {PAGES.map((page, index) => (
            <li key={index}>
              <NavLink to={ROUTE_PATH[page]}>{page}</NavLink>
            </li>
          ))}
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
