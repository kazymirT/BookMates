import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { BUTTON_CLOSE_ID } from './constants';
import {
  RegisterValues,
  getRegisterSchema,
} from '../../../utils/validateSchema';
import Checkbox from '../../ui-components/Checkbox/Checkbox';
import Input from '../../ui-components/Input/Input';
import styles from '../Form.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import { useFormActions } from '@/hooks/useFormActions';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';

const RegisterForm = () => {
  const { t } = useTranslation();
  const [isServerError, setIsServerError] = useState<boolean>(false);
  const { registerUser } = useFormActions();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<RegisterValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      confirmEmail: '',
      password: '',
      accept: false,
    },
    resolver: zodResolver(getRegisterSchema(t)),
    mode: 'onTouched',
  });

  const onSubmit = async (formData: RegisterValues) => {
    const error = await registerUser(formData);
    if (error) {
      setIsServerError(true);
    }
  };

  const handleLogin = () => dispatch(toggleModal({ openedModalType: 'login' }));
  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  const hideServerError = () => isServerError && setIsServerError(false);
  const handleResetPassword = () =>
    dispatch(toggleModal({ openedModalType: 'reset-password' }));
  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <h2>{t('register.title')}</h2>
        <button
          className={styles.close}
          type="button"
          aria-label="close modal"
          onClick={handleClose}
          data-testid={BUTTON_CLOSE_ID}
        >
          <Icon.Close />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles['input-container']}>
          <Input
            {...register('firstName')}
            placeholder={t('register.first-name')}
            type="text"
            errorMessage={errors.firstName?.message}
          />
          <Input
            {...register('lastName')}
            placeholder={t('register.last-name')}
            type="text"
            errorMessage={errors.lastName?.message}
          />
          <div className={styles['email-container']}>
            <Input
              {...register('email')}
              placeholder={t('register.email')}
              type="email"
              serverError={isServerError}
              onFocus={hideServerError}
              errorMessage={errors.email?.message}
            />
            {isServerError && (
              <div className={styles.error}>
                <p>{t('register.email-error')}</p>{' '}
                <button type="button" onClick={handleResetPassword}>
                  {t('register.btn-reset-password')}
                </button>
              </div>
            )}
          </div>
          <Input
            {...register('confirmEmail')}
            placeholder={t('register.confirm-email')}
            type="email"
            errorMessage={errors.confirmEmail?.message}
          />
          <Input
            {...register('password')}
            placeholder={t('register.password')}
            type="password"
            errorMessage={errors.password?.message}
          />
          <p className={styles['password-hint']}>
            {t('register.support-text')}
          </p>
        </div>
        <Checkbox {...register('accept')} type="checkbox" variant="primary">
          <p className={styles.terms}>{t('register.checkbox')}</p>
        </Checkbox>
        <Button
          type="submit"
          size={Sizes.Full}
          variant={Variant.Basic}
          text={t('register.btn-in')}
          disabled={!isValid || isServerError || isSubmitting}
        />
      </form>
      <button className={styles.register} type="button" onClick={handleLogin}>
        {t('register.btn-register')}
      </button>
    </section>
  );
};

export default RegisterForm;
