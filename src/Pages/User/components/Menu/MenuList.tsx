import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import styles from './MenuList.module.scss';
import { MENU_LINKS } from '../../data';
import { useAppDispatch } from '@/redux/hooks';
import { logout } from '@/redux/slices/userSlice';

const MenuList = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const handleLogout = () => dispatch(logout());
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    classNames(styles.navItem, { [styles.active]: isActive });
  return (
    <ul className={styles.list}>
      {MENU_LINKS &&
        MENU_LINKS.map(({ id, link, name }) => (
          <li key={id}>
            <NavLink to={link} className={linkClass} end>
              {t(`user.menu.${name}`)}
            </NavLink>
          </li>
        ))}
      <li>
        <NavLink to={'/'} className={linkClass} onClick={handleLogout}>
          {t('user.menu.logout')}
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuList;
