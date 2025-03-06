import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import styles from '../Form.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import Input from '@/components/ui-components/Input/Input';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useLoginMutation } from '@/redux/services/authNewApi';
import { toggleModal } from '@/redux/slices/modalSlice';
import { clearPendingLoginData, userData } from '@/redux/slices/userSlice';
import { getNewDeviceSchema, NewDeviceValues } from '@/utils/validateSchema';

const DeviceCode = () => {
  const { t } = useTranslation();
  const user = useAppSelector(userData);
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
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
      dispatch(clearPendingLoginData());
    } else {
      dispatch(toggleModal({ openedModalType: null }));
    }
  };
  const handleRepeatSendCode = () => {
    console.log('send repeat code');
  };
  return (
    <section
      className={`${styles['form-container']} ${styles['form-container__device-code']}`}
    >
      <p className={styles.description}>{t('device-code.description')}</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.wrapper}>
          <Input
            {...register('newDeviceCode')}
            placeholder={t('device-code.placeholder')}
            type="text"
            sizeSpan="s"
            errorMessage={errors.newDeviceCode?.message}
          />
          <button onClick={handleRepeatSendCode}>
            {t('device-code.link')}
          </button>
        </div>
        <Button
          type="submit"
          size={Sizes.Full}
          variant={Variant.Basic}
          text={t('device-code.button')}
          disabled={!isValid || isSubmitting}
        />
      </form>
    </section>
  );
};

export default DeviceCode;
