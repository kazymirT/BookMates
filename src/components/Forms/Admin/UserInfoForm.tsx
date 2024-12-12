import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import styles from './Form.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import InputAdmin from '@/components/ui-components/InputAdmin/InputAdmin';
import { useAppSelector } from '@/redux/hooks';
import { clientId } from '@/redux/slices/adminSlice';
import { userInfoSchema, UserInfoValues } from '@/utils/validateSchema';

const UserInfoForm: FC<{ onClose: () => void }> = ({ onClose }) => {
  const id = useAppSelector(clientId);
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<UserInfoValues>({
    defaultValues: {
      name: 'Мельник Валерія',
      city: 'Одеса',
      email: 'example@gmail.com',
      phone: '+38 (000) 000-00-00',
      date: '2024-08-28',
      password: '1qQqqqqqq',
      userId: '1',
    },
    resolver: zodResolver(userInfoSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: UserInfoValues) => {
    console.log(data, id);
    onClose();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles['input-container']}>
        <InputAdmin
          {...register('userId')}
          placeholder="User ID"
          errorMessage={errors.userId?.message}
        />
        <InputAdmin
          {...register('date')}
          placeholder="Дата реєстрації"
          type="date"
          errorMessage={errors.date?.message}
        />
      </div>
      <div className={styles['input-container']}>
        <InputAdmin
          {...register('name')}
          placeholder="ПІ"
          errorMessage={errors.name?.message}
        />
        <InputAdmin
          {...register('city')}
          placeholder="Місто"
          errorMessage={errors.city?.message}
        />
      </div>
      <div className={styles['input-container']}>
        <InputAdmin
          {...register('phone')}
          placeholder="Номер телефону"
          errorMessage={errors.phone?.message}
        />
        <InputAdmin
          {...register('password')}
          placeholder="Пароль"
          type="password"
          errorMessage={errors.password?.message}
        />
      </div>
      <InputAdmin
        {...register('email')}
        placeholder="Електронна пошта"
        errorMessage={errors.email?.message}
      />
      <Button
        type="submit"
        size={Sizes.Full}
        variant={Variant.Basic}
        text="Зберегти"
        disabled={!isValid || isSubmitting}
      />
    </form>
  );
};

export default UserInfoForm;
