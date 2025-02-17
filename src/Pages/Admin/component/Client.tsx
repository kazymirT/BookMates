import styles from './Components.module.scss';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch } from '@/redux/hooks';
import { setClientId } from '@/redux/slices/adminSlice';
import { toggleModal } from '@/redux/slices/modalSlice';
import { clientArr } from '@/utils/fake';

const Client = () => {
  const dispatch = useAppDispatch();
  const handleOnClick = (id: number) => {
    dispatch(setClientId(id));
    dispatch(toggleModal({ openedModalType: 'user-info' }));
  };
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
                  <button onClick={() => handleOnClick(client.id)}>
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
