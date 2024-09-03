import { useState } from 'react';

import styles from '../../Forms/Admin/Form.module.scss';
import OrderInfo from '../OrderInfo/OrderInfo';
import UserNotAuthorizedInfoForm from '@/components/Forms/Admin/UserNotAuthorizedInfoForm';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch } from '@/redux/hooks';
import { setClientId } from '@/redux/slices/adminSlice';
import { toggleModal } from '@/redux/slices/modalSlice';

const UserNotAuthorizedInfo = () => {
  const [formOpen, setFormOpen] = useState<'data' | 'order'>('data');
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(toggleModal({ openedModalType: null }));
    dispatch(setClientId(null));
  };
  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <button className={styles.close} onClick={handleClose}>
          <Icon.Close />
        </button>
        <div className={styles.btns}>
          <button
            type="button"
            onClick={() => setFormOpen('data')}
            className={formOpen === 'data' ? styles.active : ''}
          >
            Дані
          </button>
          <button
            type="button"
            onClick={() => setFormOpen('order')}
            className={formOpen === 'order' ? styles.active : ''}
          >
            Всі замовлення
          </button>
        </div>
      </div>
      {formOpen === 'data' ? (
        <UserNotAuthorizedInfoForm onClose={handleClose} />
      ) : (
        <OrderInfo />
      )}
    </section>
  );
};

export default UserNotAuthorizedInfo;
