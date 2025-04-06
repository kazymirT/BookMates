import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import styles from '../Form.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import Input from '@/components/ui-components/Input/Input';
import { useAppDispatch } from '@/redux/hooks';
import { useSetNewPasswordMutation } from '@/redux/services/auth';
import { toggleModal } from '@/redux/slices/modalSlice';
import {
  getNewPasswordSchema,
  NewPasswordValues,
} from '@/utils/validateSchema';

const NewPassword = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [setNewPassword] = useSetNewPasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<NewPasswordValues>({
    resolver: zodResolver(getNewPasswordSchema(t)),
    defaultValues: {},
    mode: 'onTouched',
  });
  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));

  const onSubmit = async ({ code, password }: NewPasswordValues) => {
    setNewPassword({ code, newPassword: password });
  };
  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <h2>{t('login.title')}</h2>
        <button
          className={styles.close}
          onClick={handleClose}
          aria-label="close modal"
        >
          <Icon.Close />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles['input-container']}>
          <Input
            {...register('code')}
            placeholder={t('newPassword.code')}
            type="text"
            errorMessage={errors.code?.message}
          />
          <Input
            {...register('password')}
            placeholder={t('login.password')}
            type="password"
            autoComplete="current-password"
            errorMessage={errors.password?.message}
          />
          <Input
            {...register('confirmPassword')}
            placeholder={t('login.password')}
            type="password"
            autoComplete="current-password"
            errorMessage={errors.password?.message}
          />
        </div>
        <Button
          type="submit"
          size={Sizes.Full}
          variant={Variant.Basic}
          text={t('login.btn-in')}
          disabled={!isValid || isSubmitting}
        />
      </form>
    </section>
  );
};

export default NewPassword;
