import { FC, ReactNode } from 'react';

import styles from './Menu.module.scss';
export interface MenuProps {
  title: ReactNode;
  body: ReactNode;
}
const Menu: FC<MenuProps> = ({ body, title }) => {
  return (
    <div className={styles.menu}>
      {title}
      {body}
    </div>
  );
};

export default Menu;
