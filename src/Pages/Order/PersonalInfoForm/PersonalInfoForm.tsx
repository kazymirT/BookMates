import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './PersonalInfoForm.module.scss';
import { type PersonalInfoFormProps } from '../order.types';
import Input from '@/components/ui-components/Input/Input';
import InputPhone from '@/components/ui-components/Input/InputPhone';
import { useAppSelector } from '@/redux/hooks';
import { userData } from '@/redux/slices/userSlice';

const PersonalInfoForm = ({
  register,
  errors,
  resetField,
}: PersonalInfoFormProps) => {
  const { t } = useTranslation();
  const { user } = useAppSelector(userData);

  useEffect(() => {
    resetField('firstName', { defaultValue: user?.firstName ?? '' });
    resetField('lastName', { defaultValue: user?.lastName ?? '' });
    resetField('email', { defaultValue: user?.email ?? '' });
  }, [resetField, user]);

  return (
    <article className={styles['form-item']}>
      <div className={styles.title}>
        <div className={styles.circle}>1</div>
        <h3>{t('order.form.one.title')}</h3>
      </div>
      <div className={styles['input-container']}>
        <Input
          {...register.firstName}
          placeholder={t('order.form.one.firstName')}
          requiredMessage
          type="text"
          errorMessage={errors.firstName?.message}
        />
        <Input
          {...register.lastName}
          placeholder={t('order.form.one.lastName')}
          requiredMessage
          type="text"
          errorMessage={errors.lastName?.message}
        />
        <InputPhone
          {...register.phone}
          placeholder={t('order.form.one.phone')}
          requiredMessage
          type="text"
          errorMessage={errors.phone?.message}
        />
        <Input
          {...register.email}
          requiredMessage
          placeholder={t('order.form.one.email')}
          type="text"
          disabled={!!user?.email}
          errorMessage={errors.email?.message}
        />
      </div>
    </article>
  );
};

export default PersonalInfoForm;
