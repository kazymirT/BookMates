import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import NovaPoshtaForm from './NovaPoshtaForm/NovaPoshtaForm';
import styles from './Order.module.scss';
import OrderActions from './OrderActions/OrderActions';
import PersonalInfoForm from './PersonalInfoForm/PersonalInfoForm';
import { useFormActions } from '@/hooks/useFormActions';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';
import { clearCart } from '@/redux/slices/shoppingCartSlice';
import { toggleStatus } from '@/redux/slices/statusSlice';
import { getOrderSchema, OrderValues } from '@/utils/validateSchema';

const OrderForm = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { sendFeedback } = useFormActions();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    resetField,
    formState: { isValid, errors, isSubmitting },
  } = useForm<OrderValues>({
    defaultValues: {
      firstName: ' ',
      lastName: ' ',
      email: ' ',
      phone: '0',
      department: undefined,
      city: undefined,
      pay: 'Оплата за реквізитами',
    },
    resolver: zodResolver(getOrderSchema(t)),
    mode: 'onTouched',
  });

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
  return (
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
          resetField={resetField}
        />
        <NovaPoshtaForm control={control} setValue={setValue} />
      </div>
      <OrderActions
        isSubmitting={isSubmitting}
        isValid={isValid}
        register={register('pay')}
      />
    </form>
  );
};

export default OrderForm;
