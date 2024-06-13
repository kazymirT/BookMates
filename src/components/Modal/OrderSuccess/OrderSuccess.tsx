import { Link } from 'react-router-dom';

import styles from '../../Forms/Form.module.scss';
import thanks from '@/assets/images/thanks.png';
import Salute from '@/components/StatusScreen/Salute/Salute';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';

const OrderSuccess = () => {
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <h2>Замовлення успішне</h2>
        <button
          type="button"
          className={styles.close}
          onClick={handleClose}
        ></button>
      </div>
      <div className={styles['success']}>
        <img src={thanks} alt="thanks" width={246} height={246} />
        <Salute />
        <p className={styles.success}>
          Дякуємо за замовлення. Реквізити для оплати відправлені на пошту.
        </p>
      </div>
      <Link to={'/catalog'} className={styles.submit} onClick={handleClose}>
        Продовжити покупки
      </Link>
    </section>
  );
};

export default OrderSuccess;
