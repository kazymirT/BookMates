import styles from './OrderInfo.module.scss';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch } from '@/redux/hooks';
import { setOrderId } from '@/redux/slices/adminSlice';
import { toggleModal } from '@/redux/slices/modalSlice';
import { orderList } from '@/utils/fake';

const OrderInfo = () => {
  const dispatch = useAppDispatch();
  const handleOnClick = () => {
    dispatch(setOrderId('12345'));
    dispatch(toggleModal({ openedModalType: 'edit-order' }));
  };
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Адреса для відправки</th>
          <th>Статус</th>
          <th>Ціна</th>
          <th>Редагувати</th>
        </tr>
      </thead>
      <tbody>
        {orderList &&
          orderList.map((order) => (
            <tr key={order.id}>
              <td className={styles.id}>{order.id}</td>
              <td className={styles.address}>{order.address}</td>
              <td className={styles.status}>{order.status}</td>
              <td className={styles.price}>{order.price}</td>
              <td>
                <button onClick={handleOnClick}>
                  <Icon.Edit width="16" height="16" />
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default OrderInfo;
