import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import styles from '../Form.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import Input from '@/components/ui-components/Input/Input';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  useResendCodeMutation,
  useSetNewPasswordMutation,
} from '@/redux/services/auth';
import { errorState, setNewPasswordError } from '@/redux/slices/errorSlice';
import { toggleModal } from '@/redux/slices/modalSlice';
import {
  getNewPasswordSchema,
  NewPasswordValues,
} from '@/utils/validateSchema';

const NewPassword = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { newPassword, resendResetPassword } = useAppSelector(errorState);
  const [setNewPassword] = useSetNewPasswordMutation();
  const [resendCode] = useResendCodeMutation();

  const {
    register,
    handleSubmit,
    resetField,
    formState: { isValid, errors },
  } = useForm<NewPasswordValues>({
    resolver: zodResolver(getNewPasswordSchema(t)),
    defaultValues: {},
    mode: 'onTouched',
  });
  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  const sendResendCode = async () => {
    if (resendResetPassword) {
      await resendCode({
        condition: 'reset_password',
        email: resendResetPassword,
      });
      resetField('code', {
        defaultValue: '',
        keepDirty: true,
        keepError: false,
        keepTouched: false,
      });
      dispatch(setNewPasswordError(null));
    }
  };
  const handleResetError = () => dispatch(setNewPasswordError(null));
  const onSubmit = async ({ code, password }: NewPasswordValues) => {
    setNewPassword({ code, newPassword: password });
  };
  useEffect(() => {
    return () => {
      dispatch(setNewPasswordError(null));
    };
  }, [dispatch]);
  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <h2>{t('new-password.title')}</h2>
        <button
          className={styles.close}
          onClick={handleClose}
          aria-label="close modal"
        >
          <Icon.Close />
        </button>
      </div>
      <p className={styles.success}>{t('new-password.description')}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles['input-container']}>
          <div className={styles['email-container']}>
            <Input
              {...register('code')}
              placeholder={t('new-password.placeholder.code')}
              type="text"
              onFocus={handleResetError}
              serverError={!!newPassword}
              errorMessage={errors.code?.message}
            />
            {!!newPassword && (
              <div className={styles.error}>
                <p>{t('new-password.code-error')}</p>{' '}
                <button type="button" onClick={sendResendCode}>
                  {t('new-password.btn-resend-code')}
                </button>
              </div>
            )}
          </div>
          <Input
            {...register('password')}
            placeholder={t('new-password.placeholder.password')}
            type="password"
            autoComplete="current-password"
            errorMessage={errors.password?.message}
          />
          <Input
            {...register('confirmPassword')}
            placeholder={t('new-password.placeholder.confirm-password')}
            type="password"
            autoComplete="current-password"
            errorMessage={errors.confirmPassword?.message}
          />
        </div>
        <Button
          type="submit"
          size={Sizes.Full}
          variant={Variant.Basic}
          text={t('new-password.button')}
          disabled={!isValid || !!newPassword}
        />
      </form>
    </section>
  );
};

export default NewPassword;
