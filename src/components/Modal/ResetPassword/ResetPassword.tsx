import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { BUTTON_CLOSE_ID } from './constants';
import styles from '../../Forms/Form.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import Input from '@/components/ui-components/Input/Input';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useForgetPasswordMutation } from '@/redux/services/auth';
import { errorState, setResetPasswordError } from '@/redux/slices/errorSlice';
import { toggleModal } from '@/redux/slices/modalSlice';
import {
  ResetPasswordValues,
  getResetPasswordSchema,
} from '@/utils/validateSchema';

const ResetPassword = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { resetPassword } = useAppSelector(errorState);
  const [forgetPassword, { isLoading }] = useForgetPasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ResetPasswordValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(getResetPasswordSchema(t)),
    mode: 'onTouched',
  });
  const onSubmit = async (data: ResetPasswordValues) => {
    forgetPassword(data);
  };
  const setServerError = () => dispatch(setResetPasswordError(null));
  const handleRegister = () =>
    dispatch(toggleModal({ openedModalType: 'login' }));
  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  useEffect(() => {
    return () => {
      dispatch(setResetPasswordError(null));
    };
  }, [dispatch]);
  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <h2>{t('reset-password.title')}</h2>
        <button
          type="button"
          aria-label="close modal"
          className={styles.close}
          onClick={handleClose}
          data-testid={BUTTON_CLOSE_ID}
        >
          <Icon.Close />
        </button>
      </div>
      <p className={styles.success}>{t('reset-password.description')}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles['input-container']}>
          <Input
            {...register('email')}
            placeholder={t('reset-password.email')}
            type="email"
            onFocus={setServerError}
            serverError={!!resetPassword}
            errorMessage={errors.email?.message}
          />
          {!!resetPassword && (
            <div className={styles.error}>
              <p>{t('reset-password.error')}</p>
            </div>
          )}
        </div>
        <Button
          type="submit"
          size={Sizes.Full}
          variant={Variant.Basic}
          text={t('reset-password.btn-in')}
          disabled={!isValid || isLoading || !!resetPassword}
        />
      </form>
      <button
        className={styles.register}
        type="button"
        onClick={handleRegister}
      >
        {t('reset-password.btn-login')}
      </button>
    </section>
  );
};

export default ResetPassword;
