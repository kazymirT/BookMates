import styles from './Components.module.scss';
import { Icon } from '@/components/ui-components/Icons';
import { clientArr } from '@/utils/fake';

const Client = () => {
  return (
    <div className={styles.client}>
      <table>
        <thead>
          <tr>
            <th className={styles.id}>User id</th>
            <th className={styles.name}>ПІ</th>
            <th className={styles.city}>Місто</th>
            <th className={styles.edit}>Редагувати</th>
          </tr>
        </thead>
        <tbody>
          {clientArr?.length &&
            clientArr.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.user}</td>
                <td>{client.city}</td>
                <td className={styles['edit-icon']}>
                  <button>
                    <Icon.Edit width="16" height="16" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Client;
