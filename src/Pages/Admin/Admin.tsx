import { NavLink, useParams } from 'react-router-dom';

import styles from './Admin.module.scss';
import Books from './component/Books';
import Categories from './component/Categories';
import Client from './component/Client';
import ClientN from './component/ClientN';
import OrderA from './component/Order';
import { ADMIN_LIST } from '@/utils/constants';

const Admin = () => {
  const { adminId } = useParams();
  return (
    <div className={styles.admin}>
      <aside>
        <ul>
          {ADMIN_LIST &&
            ADMIN_LIST.map((list) => (
              <li key={list.id}>
                <NavLink
                  to={list.url}
                  className={({ isActive }) => (isActive ? styles.active : '')}
                >
                  {list.name}
                </NavLink>
              </li>
            ))}
        </ul>
      </aside>
      <main>
        {adminId === 'categories' ? (
          <Categories />
        ) : adminId === 'client' ? (
          <Client />
        ) : adminId === 'clientN' ? (
          <ClientN />
        ) : adminId === 'order' ? (
          <OrderA />
        ) : (
          <Books />
        )}
      </main>
    </div>
  );
};

export default Admin;
