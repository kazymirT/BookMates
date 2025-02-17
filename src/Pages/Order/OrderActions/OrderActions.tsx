import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './OrderActions.module.scss';
import { type OrderActionsProps } from '../order.types';
import OrderItem from '../OrderItem/OrderItem';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import Checkbox from '@/components/ui-components/Checkbox/Checkbox';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { goods } from '@/redux/slices/shoppingCartSlice';
import { toggleOpenCart } from '@/redux/slices/shoppingCartUiSlice';

const OrderActions = ({
  register,
  isValid,
  isSubmitting,
}: OrderActionsProps) => {
  const { t } = useTranslation();

  const cartItems = useAppSelector(goods);
  const dispatch = useAppDispatch();
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total +
      (item.discount
        ? Number(item.discountPrice) * item.quantity
        : Number(item.price) * item.quantity),
    0
  );
  const openCart = () => dispatch(toggleOpenCart(true));

  return (
    <aside className={styles.actions}>
      <div className={styles.title}>
        <h3>{t('order.aside.title')}</h3>
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
          <span className={styles.label}>{t('order.aside.amount')}</span>
          <span className={styles.value}>
            {t('order.aside.price', { price: totalPrice })}
          </span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>{t('order.aside.delivery')}</span>
          <span className={styles.value}>
            {t('order.aside.price', { price: 0 })}
          </span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>{t('order.aside.promo-code')}</span>
          <input
            className={styles['promo-code']}
            placeholder={t('order.aside.promo-code-placeholder')}
            type="text"
            name="promo code"
          />
        </div>
      </div>
      <div className={styles['order-total']}>
        <div className={styles.summary}>
          <span className={styles.label}>{t('order.aside.together')}</span>
          <span className={styles.value}>
            {t('order.aside.price', { price: totalPrice })}
          </span>
        </div>
        <Checkbox
          {...register}
          variant="primary"
          name="pay"
          type="radio"
          value="Оплата за реквізитами"
        >
          <p>{t('order.aside.payment-by-details')}</p>
        </Checkbox>
        <Checkbox
          {...register}
          variant="primary"
          name="pay"
          type="radio"
          value="Оплата при отриманні"
        >
          <p>{t('order.aside.payment-upon-receipt')}</p>
        </Checkbox>
      </div>
      <div className={styles['order-actions']}>
        <Button
          type="submit"
          size={Sizes.Full}
          text={t('order.aside.btn-order')}
          variant={Variant.Basic}
          disabled={!isValid || isSubmitting}
        />
        <Link to={'/catalog'} className={styles.continue} type="button">
          {t('order.aside.btn-shopping')}
        </Link>
      </div>
    </aside>
  );
};

export default OrderActions;
