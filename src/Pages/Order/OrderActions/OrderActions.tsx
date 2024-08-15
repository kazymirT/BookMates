import { Link } from 'react-router-dom';

import styles from './OrderActions.module.scss';
import { type OrderActionsProps } from '../order.types';
import OrderItem from '../OrderItem/OrderItem';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import Checkbox from '@/components/ui-components/Checkbox/Checkbox';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { goods, toggleOpenCart } from '@/redux/slices/shoppingCartSlice';

const OrderActions = ({
  register,
  isValid,
  isSubmitting,
}: OrderActionsProps) => {
  const cartItems = useAppSelector(goods);
  const dispatch = useAppDispatch();
  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );
  const openCart = () => dispatch(toggleOpenCart(true));

  return (
    <aside className={styles.actions}>
      <div className={styles.title}>
        <h3>Моє замовлення</h3>
        <button type="button" onClick={openCart}>
          <Icon.Edit />
        </button>
      </div>
      <div className={styles['order-list']}>
        {cartItems &&
          cartItems.map((order) => <OrderItem key={order.id} data={order} />)}
      </div>
      <div className={styles['order-details']}>
        <div className={styles.item}>
          <span className={styles.label}>Сумма</span>
          <span className={styles.value}>{totalPrice}</span>
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
          <span className={styles.value}>{totalPrice}</span>
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
        <Button
          buttonType={ButtonType.Submit}
          size={Sizes.Full}
          text="Підтвердити замовлення"
          variant={Variant.Basic}
          disabled={!isValid || isSubmitting}
        />
        <Link to={'/catalog'} className={styles.continue} type="button">
          Продовжити покупки
        </Link>
      </div>
    </aside>
  );
};

export default OrderActions;
