import { Link } from 'react-router-dom';

import styles from './OrderActions.module.scss';
import { type OrderActionsProps } from '../order.types';
import OrderItem from '../OrderItem/OrderItem';
import EditIcon from '@/components/svg/edit/Edit';
import Checkbox from '@/components/ui-components/Checkbox/Checkbox';
import { ordersList } from '@/utils/fake';

const OrderActions = ({
  register,
  isValid,
  isSubmitting,
}: OrderActionsProps) => {
  return (
    <aside className={styles.actions}>
      <div className={styles.title}>
        <h3>Моє замовлення</h3>
        <button type="button">
          <EditIcon />
        </button>
      </div>
      <div className={styles['order-list']}>
        {ordersList &&
          ordersList.map((order) => <OrderItem key={order.id} data={order} />)}
      </div>
      <div className={styles['order-details']}>
        <div className={styles.item}>
          <span className={styles.label}>Сумма</span>
          <span className={styles.value}>240</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Доставка</span>
          <span className={styles.value}>0</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Промокод</span>
          <input
            className={styles['promo-code']}
            placeholder="промокод"
            type="text"
            name="промокод"
          />
        </div>
      </div>
      <div className={styles['order-total']}>
        <div className={styles.summary}>
          <span className={styles.label}>Разом</span>
          <span className={styles.value}>240</span>
        </div>
        <Checkbox
          {...register}
          variant="primary"
          name="pay"
          type="radio"
          value="Оплата за реквізитами"
        >
          <p>Оплата за реквізитами</p>
        </Checkbox>
        <Checkbox
          {...register}
          variant="primary"
          name="pay"
          type="radio"
          value="Оплата при отриманні"
        >
          <p>Оплата при отриманні</p>
        </Checkbox>
      </div>
      <div className={styles['order-actions']}>
        <button
          type="submit"
          className={styles.submit}
          disabled={!isValid || isSubmitting}
        >
          Підтвердити замовлення
        </button>
        <Link to={'/catalog'} className={styles.continue} type="button">
          Продовжити покупки
        </Link>
      </div>
    </aside>
  );
};

export default OrderActions;
