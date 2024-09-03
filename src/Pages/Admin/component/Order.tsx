import styles from './Components.module.scss';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch } from '@/redux/hooks';
import { setOrderId } from '@/redux/slices/adminSlice';
import { toggleModal } from '@/redux/slices/modalSlice';
import { ORDER_LIST } from '@/utils/fake';

const OrderA = () => {
  const dispatch = useAppDispatch();

  const handleOnEdit = (orderId: string) => {
    dispatch(setOrderId(orderId));
    dispatch(toggleModal({ openedModalType: 'edit-order' }));
  };
  return (
    <div className={styles['order-table']}>
      <table>
        <thead>
          <tr>
            <th>Номер замовлення</th>
            <th>User ID</th>
            <th>Книга</th>
            <th>Ціна</th>
            <th>Редагувати</th>
          </tr>
        </thead>
        <tbody>
          {ORDER_LIST &&
            ORDER_LIST.map((list) => (
              <tr key={list.orderId}>
                <td className={styles.orderId}>{list.orderId}</td>
                <td className={styles.userId}>{list.userId}</td>
                <td className={styles.book}>{list.book}</td>
                <td className={styles.price}>{list.price}</td>
                <td className={styles['edit-icon']}>
                  <button onClick={() => handleOnEdit(list.orderId)}>
                    <Icon.Edit />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderA;
