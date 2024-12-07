import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';

import styles from './Form.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import InputAdmin from '@/components/ui-components/InputAdmin/InputAdmin';
import Select from '@/components/ui-components/Select/Select';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { orderId } from '@/redux/slices/adminSlice';
import { toggleModal } from '@/redux/slices/modalSlice';
import { ORDER_STATUS } from '@/utils/constants';
import { ORDER_LIST } from '@/utils/fake';
import { orderListSchema, OrderListValues } from '@/utils/validateSchema';

const OrderEdit = () => {
  const id = useAppSelector(orderId);
  const currentOrder = ORDER_LIST.filter((order) => order.orderId === id);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors, isSubmitting },
  } = useForm<OrderListValues>({
    defaultValues: {
      book: currentOrder[0].book,
      orderId: currentOrder[0].orderId,
      price: currentOrder[0].price,
      quantity: currentOrder[0].quality,
      userId: currentOrder[0].userId,
      status: currentOrder[0].status,
    },
    resolver: zodResolver(orderListSchema),
    mode: 'onTouched',
  });
  const onSubmit = async (data: OrderListValues) => {
    console.log(data);
    dispatch(toggleModal({ openedModalType: null }));
  };

  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <button className={styles.close} onClick={handleClose}>
          <Icon.Close />
        </button>
        <h2>Дані</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles['input-container']}>
          <InputAdmin
            {...register('orderId')}
            placeholder="Номер замолення"
            errorMessage={errors.orderId?.message}
          />
          <InputAdmin
            {...register('userId')}
            placeholder="User ID"
            errorMessage={errors.userId?.message}
          />
        </div>
        <InputAdmin
          {...register('book')}
          placeholder="Книга"
          errorMessage={errors.book?.message}
        />
        <div className={styles['input-container']}>
          <InputAdmin
            {...register('quantity')}
            placeholder="Кількість"
            errorMessage={errors.quantity?.message}
          />
          <InputAdmin
            {...register('price')}
            placeholder="Ціна"
            errorMessage={errors.price?.message}
          />
        </div>
        <Controller
          control={control}
          name="status"
          render={({ field, fieldState }) => (
            <Select
              placeholder="Статус"
              value={field.value}
              options={Object.values(ORDER_STATUS)}
              onChange={(newValue) => field.onChange(newValue)}
              onBlur={field.onBlur}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
        <Button
          type="submit"
          size={Sizes.Full}
          variant={Variant.Basic}
          text="Зберегти"
          disabled={!isValid || isSubmitting}
        />
      </form>
    </section>
  );
};

export default OrderEdit;
