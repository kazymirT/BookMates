import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import NovaPoshtaForm from './NovaPoshtaForm/NovaPoshtaForm';
import styles from './Order.module.scss';
import OrderActions from './OrderActions/OrderActions';
import PersonalInfoForm from './PersonalInfoForm/PersonalInfoForm';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import { useFormActions } from '@/hooks/useFormActions';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';
import { clearCart, goods } from '@/redux/slices/shoppingCartSlice';
import { toggleStatus } from '@/redux/slices/statusSlice';
import { userData } from '@/redux/slices/userSlice';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';
import { type OrderValues, orderSchema } from '@/utils/validateSchema';

const Order = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const bookInCard = useAppSelector(goods);
  const { user } = useAppSelector(userData);
  const { sendFeedback } = useFormActions();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { isValid, errors, isSubmitting },
  } = useForm<OrderValues>({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      phone: '0',
      department: undefined,
      city: undefined,
      pay: 'Оплата за реквізитами',
    },
    resolver: zodResolver(orderSchema),
    mode: 'onTouched',
  });
  useEffect(() => {
    if (bookInCard.length === 0) {
      navigate('/catalog');
    }
  }, [bookInCard, navigate]);

  const onSubmit = async (formData: OrderValues) => {
    // eslint-disable-next-line no-console
    console.log(formData);
    dispatch(toggleStatus('loading'));
    const response = await sendFeedback();
    if (response) {
      dispatch(clearCart());
      dispatch(toggleStatus('idle'));
      dispatch(toggleModal({ openedModalType: 'order-success' }));
      navigate('/');
    }
  };
  const breadCrumbs = createBreadcrumbs('order');

  return (
    <div className={styles.order}>
      <div className="container">
        <div className={styles['order-container']}>
          <Breadcrumbs options={breadCrumbs} activeLastLink={false} />
          <section className={styles.main}>
            <h2>Оформити замовлення</h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className={styles.articles}>
                <PersonalInfoForm
                  errors={errors}
                  register={{
                    firstName: register('firstName'),
                    lastName: register('lastName'),
                    email: register('email'),
                    phone: register('phone'),
                  }}
                />
                <NovaPoshtaForm control={control} setValue={setValue} />
              </div>
              <OrderActions
                isSubmitting={isSubmitting}
                isValid={isValid}
                register={register('pay')}
              />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Order;
