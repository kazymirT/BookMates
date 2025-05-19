import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { BUTTON_CLOSE_ID } from './constants';
import Input from '../../ui-components/Input/Input';
import styles from '../Form.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useLoginMutation, useResendCodeMutation } from '@/redux/services/auth';
import {
  errorState,
  setAllLoginError,
  setDeviceCodeError,
  setIsDeviceCode,
  setLoginError,
} from '@/redux/slices/errorSlice';
import { toggleModal } from '@/redux/slices/modalSlice';
import {
  LoginValues,
  NewDeviceValues,
  getLoginSchema,
  getNewDeviceSchema,
} from '@/utils/validateSchema';

const LoginForm = () => {
  const { t } = useTranslation();
  const {
    login: { isEmailConfirmed, isUnauthorized, isUserFound },
    deviceCode,
    isDeviceCode,
  } = useAppSelector(errorState);
  const [resendCode] = useResendCodeMutation();
  console.log(!!isUnauthorized);
  const isServerError = !!isUnauthorized || !!isUserFound;
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const {
    register,
    getValues,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(getLoginSchema(t)),
    mode: 'onTouched',
  });
  const {
    register: registerCode,
    handleSubmit: handleSubmitCode,
    resetField,
    formState: { isValid: isValidCode, errors: errorsCode },
  } = useForm<NewDeviceValues>({
    resolver: zodResolver(getNewDeviceSchema(t)),
    defaultValues: { newDeviceCode: '' },
    mode: 'onTouched',
  });
  const onSubmit = async (data: LoginValues) => {
    await login(data);
  };

  const handleRegister = () =>
    dispatch(toggleModal({ openedModalType: 'create-account' }));
  const handleResetPassword = () =>
    dispatch(toggleModal({ openedModalType: 'reset-password' }));
  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  const hideServerError = () =>
    (isServerError || !isEmailConfirmed) && dispatch(setAllLoginError());

  const onSubmitCode = async ({ newDeviceCode }: NewDeviceValues) => {
    const email = getValues('email');
    const password = getValues('password');
    await login({ email, password, newDeviceCode });
  };
  const handleRepeatSendCode = async () => {
    const email = getValues('email');
    if (email) {
      await resendCode({ condition: 'verify_device', email });
      setDeviceError();
      resetField('newDeviceCode', { defaultValue: '' });
    }
  };
  const setDeviceError = () => dispatch(setDeviceCodeError(null));
  const handleResetEmailConfirm = () => {
    const email = getValues('email');
    if (email) {
      dispatch(setLoginError({ type: 'isEmailConfirmed', error: null }));
      resendCode({ condition: 'verify_email', email });
    }
  };
  useEffect(() => {
    return () => {
      dispatch(setAllLoginError());
      dispatch(setIsDeviceCode(false));
    };
  }, [dispatch]);
  return (
    <>
      {isDeviceCode ? (
        <section
          className={`${styles['form-container']} ${styles['form-container__device-code']}`}
        >
          <p className={styles.description}>{t('device-code.description')}</p>
          <form
            onSubmit={handleSubmitCode(onSubmitCode)}
            className={styles.form}
          >
            <div>
              <div className={styles.wrapper}>
                <Input
                  {...registerCode('newDeviceCode')}
                  placeholder={t('device-code.placeholder')}
                  type="text"
                  sizeSpan="s"
                  onFocus={setDeviceError}
                  serverError={!!deviceCode}
                  errorMessage={errorsCode.newDeviceCode?.message}
                />
                {!!deviceCode && (
                  <button onClick={handleRepeatSendCode} type="button">
                    {t('device-code.link')}
                  </button>
                )}
              </div>
              {!!deviceCode && (
                <div className={styles.error}>
                  <p>{t('device-code.error')}</p>
                </div>
              )}
            </div>
            <Button
              type="submit"
              size={Sizes.Full}
              variant={Variant.Basic}
              text={t('device-code.button')}
              disabled={!isValidCode || !!deviceCode || isLoading}
            />
          </form>
        </section>
      ) : (
        <section className={styles['form-container']}>
          <div className={styles['title-container']}>
            <h2>{t('login.title')}</h2>
            <button
              className={styles.close}
              onClick={handleClose}
              aria-label="close modal"
              data-testid={BUTTON_CLOSE_ID}
            >
              <Icon.Close />
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles['input-container']}>
              <Input
                {...register('email')}
                placeholder={t('login.email')}
                type="email"
                serverError={isServerError}
                onFocus={hideServerError}
                errorMessage={errors.email?.message}
              />
              <Input
                {...register('password')}
                placeholder={t('login.password')}
                type="password"
                serverError={isServerError}
                onFocus={hideServerError}
                autoComplete="current-password"
                errorMessage={errors.password?.message}
              />
              {isServerError && (
                <div className={styles.error}>
                  <p>{t('login.wrong')}</p>
                  <button
                    type="button"
                    onClick={handleResetPassword}
                    className={styles.remember}
                  >
                    {t('login.btn-reset-password')}
                  </button>
                </div>
              )}
              {isEmailConfirmed && (
                <div className={styles.error}>
                  <p>{t('login.is-not-confirm-email')}</p>
                  <button
                    type="button"
                    onClick={handleResetEmailConfirm}
                    className={styles.remember}
                  >
                    {t('login.btn-reset-confirm-email')}
                  </button>
                </div>
              )}
            </div>
            {!isServerError && (
              <button
                type="button"
                onClick={handleResetPassword}
                className={styles['reset-password']}
              >
                {t('login.reset-password')}
              </button>
            )}
            <Button
              type="submit"
              size={Sizes.Full}
              variant={Variant.Basic}
              text={t('login.btn-in')}
              disabled={
                !isValid || isLoading || isServerError || !!isEmailConfirmed
              }
            />
          </form>
          <button
            className={styles.register}
            type="button"
            onClick={handleRegister}
          >
            {t('login.btn-register')}
          </button>
        </section>
      )}
    </>
  );
};

export default LoginForm;
