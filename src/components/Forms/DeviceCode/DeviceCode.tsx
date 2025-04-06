import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import styles from '../Form.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import Input from '@/components/ui-components/Input/Input';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useLoginMutation } from '@/redux/services/auth';
import { errorState, setDeviceCodeError } from '@/redux/slices/errorSlice';
import { toggleModal } from '@/redux/slices/modalSlice';
import { userData } from '@/redux/slices/userSlice';
import { getNewDeviceSchema, NewDeviceValues } from '@/utils/validateSchema';

const DeviceCode = () => {
  const { t } = useTranslation();
  const user = useAppSelector(userData);
  const { deviceCode } = useAppSelector(errorState);
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    resetField,
    formState: { isValid, errors },
  } = useForm<NewDeviceValues>({
    resolver: zodResolver(getNewDeviceSchema(t)),
    defaultValues: { newDeviceCode: '' },
    mode: 'onTouched',
  });
  const onSubmit = async (data: NewDeviceValues) => {
    const { newDeviceCode } = data;
    if (user && user.pendingLoginData) {
      const {
        pendingLoginData: { email, password },
      } = user;
      await login({ email, password, newDeviceCode });
    } else {
      dispatch(toggleModal({ openedModalType: null }));
    }
  };
  const handleRepeatSendCode = () => {
    console.log('send repeat code');
    setDeviceError();
    resetField('newDeviceCode', { defaultValue: '' });
  };
  const setDeviceError = () => dispatch(setDeviceCodeError(null));
  useEffect(() => {
    return () => {
      dispatch(setDeviceCodeError(null));
    };
  }, [dispatch]);
  return (
    <section
      className={`${styles['form-container']} ${styles['form-container__device-code']}`}
    >
      <p className={styles.description}>{t('device-code.description')}</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <div className={styles.wrapper}>
            <Input
              {...register('newDeviceCode')}
              placeholder={t('device-code.placeholder')}
              type="text"
              sizeSpan="s"
              onFocus={setDeviceError}
              serverError={!!deviceCode}
              errorMessage={errors.newDeviceCode?.message}
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
          disabled={!isValid || !!deviceCode || isLoading}
        />
      </form>
    </section>
  );
};

export default DeviceCode;
