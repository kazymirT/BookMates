import { NavLink, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import styles from './Admin.module.scss';
import AttributesPage from './component/AttributesPage';
import Books from './component/Books';
import Client from './component/Client';
import ClientNotAuthorized from './component/ClientNotAuthorized';
import OrderA from './component/Order';
import 'react-toastify/dist/ReactToastify.css';
import { ADMIN_LIST } from './constants';
import Collections from './modules/Collections/Collections';

const Admin = () => {
  const { adminId } = useParams();
  return (
    <div className={styles.admin}>
      <ToastContainer />
      <div className="container">
        <div className={styles['admin-inner']}>
          <aside>
            <ul>
              {ADMIN_LIST &&
                ADMIN_LIST.map((list) => (
                  <li key={list.id}>
                    <NavLink
                      to={list.url}
                      className={({ isActive }) =>
                        isActive ? styles.active : ''
                      }
                    >
                      {list.name}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </aside>
          <main>
            {adminId === 'categories' ? (
              <AttributesPage
                buttonName="Додати категорію"
                listName="categories"
                name="category"
              />
            ) : adminId === 'client' ? (
              <Client />
            ) : adminId === 'clientN' ? (
              <ClientNotAuthorized />
            ) : adminId === 'order' ? (
              <OrderA />
            ) : adminId === 'authors' ? (
              <AttributesPage
                buttonName="Додати автора"
                listName="authors"
                name="authors"
              />
            ) : adminId === 'language' ? (
              <AttributesPage
                buttonName="Додати мову"
                listName="languages"
                name="language"
              />
            ) : adminId === 'collections' ? (
              <Collections />
            ) : (
              <Books />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;
