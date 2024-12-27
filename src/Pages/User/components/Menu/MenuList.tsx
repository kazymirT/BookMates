import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './MenuList.module.scss';
import { MENU_LINKS } from '../../data';

const MenuList = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    classNames(styles.navItem, { [styles.active]: isActive });
  return (
    <ul className={styles.list}>
      {MENU_LINKS &&
        MENU_LINKS.map(({ id, link, name }) => (
          <li key={id}>
            <NavLink to={link} className={linkClass} end>
              {name}
            </NavLink>
          </li>
        ))}
    </ul>
  );
};

export default MenuList;
