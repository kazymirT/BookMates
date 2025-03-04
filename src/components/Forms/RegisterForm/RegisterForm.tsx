import { zodResolver } from '@hookform/resolvers/zod';
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
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useRegisterMutation } from '@/redux/services/authNewApi';
import { errorState, setRegisterError } from '@/redux/slices/errorSlice';
import { toggleModal } from '@/redux/slices/modalSlice';

const RegisterForm = () => {
  const { t } = useTranslation();
  const { register: registerError } = useAppSelector(errorState);
  const dispatch = useAppDispatch();
  const [register] = useRegisterMutation();
  const isRegisterError = registerError !== null;

  const {
    register: formRegister,
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
    await register(formData);
  };

  const handleLogin = () => dispatch(toggleModal({ openedModalType: 'login' }));
  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  const hideServerError = () =>
    registerError && dispatch(setRegisterError(null));
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
            {...formRegister('firstName')}
            placeholder={t('register.first-name')}
            type="text"
            errorMessage={errors.firstName?.message}
          />
          <Input
            {...formRegister('lastName')}
            placeholder={t('register.last-name')}
            type="text"
            errorMessage={errors.lastName?.message}
          />
          <div className={styles['email-container']}>
            <Input
              {...formRegister('email')}
              placeholder={t('register.email')}
              type="email"
              serverError={isRegisterError}
              onFocus={hideServerError}
              errorMessage={errors.email?.message}
            />
            {isRegisterError && (
              <div className={styles.error}>
                <p>{t('register.email-error')}</p>{' '}
                <button type="button" onClick={handleResetPassword}>
                  {t('register.btn-reset-password')}
                </button>
              </div>
            )}
          </div>
          <Input
            {...formRegister('confirmEmail')}
            placeholder={t('register.confirm-email')}
            type="email"
            errorMessage={errors.confirmEmail?.message}
          />
          <Input
            {...formRegister('password')}
            placeholder={t('register.password')}
            type="password"
            errorMessage={errors.password?.message}
          />
          <p className={styles['password-hint']}>
            {t('register.support-text')}
          </p>
        </div>
        <Checkbox {...formRegister('accept')} type="checkbox" variant="primary">
          <p className={styles.terms}>{t('register.checkbox')}</p>
        </Checkbox>
        <Button
          type="submit"
          size={Sizes.Full}
          variant={Variant.Basic}
          text={t('register.btn-in')}
          disabled={!isValid || isRegisterError || isSubmitting}
        />
      </form>
      <button className={styles.register} type="button" onClick={handleLogin}>
        {t('register.btn-register')}
      </button>
    </section>
  );
};

export default RegisterForm;
