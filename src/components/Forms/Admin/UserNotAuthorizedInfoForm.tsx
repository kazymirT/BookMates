import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import styles from './Form.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import InputAdmin from '@/components/ui-components/InputAdmin/InputAdmin';
import { useAppSelector } from '@/redux/hooks';
import { clientId } from '@/redux/slices/adminSlice';
import { userNotInfoSchema, UserNotInfoValues } from '@/utils/validateSchema';

const UserNotAuthorizedInfoForm: FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  const id = useAppSelector(clientId);
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<UserNotInfoValues>({
    resolver: zodResolver(userNotInfoSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: UserNotInfoValues) => {
    console.log(data, id);
    onClose();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles['input-container']}>
        <InputAdmin
          {...register('name')}
          placeholder="ПІ"
          type="text"
          errorMessage={errors.name?.message}
        />
        <InputAdmin
          {...register('city')}
          placeholder="Місто"
          type="text"
          errorMessage={errors.city?.message}
        />
      </div>
      <InputAdmin
        {...register('phone')}
        placeholder="Номер телефону"
        type="text"
        errorMessage={errors.phone?.message}
      />

      <InputAdmin
        {...register('email')}
        placeholder="Електронна пошта"
        type="email"
        errorMessage={errors.email?.message}
      />
      <Button
        buttonType={ButtonType.Submit}
        size={Sizes.Full}
        variant={Variant.Basic}
        text="Зберегти"
        disabled={!isValid || isSubmitting}
      />
    </form>
  );
};

export default UserNotAuthorizedInfoForm;
